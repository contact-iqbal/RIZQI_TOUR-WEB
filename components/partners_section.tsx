"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const partners = [
  {
    image: "/singapore.png",
    name: "singapore",
    link: "https://www.singaporeair.com",
  },
  {
    image: "/garuda.png",
    name: "garuda",
    link: "https://www.garuda-indonesia.com",
  },
  { image: "/saudia.png", name: "Saudia", link: "https://www.saudia.com" },
  { image: "/airasia.png", name: "AirAsia", link: "https://www.airasia.com" },
  { image: "/scoot.webp", name: "Scoot", link: "https://www.flyscoot.com" },
  {
    image: "/lionair.webp",
    name: "Lion Air",
    link: "https://www.lionair.co.id",
  },
];

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector(
      ".marquee-content"
    ) as HTMLElement;

    if (!marqueeContent) return;

    const totalWidth = marqueeContent.offsetWidth / 2;

    marqueeTween.current = gsap.fromTo(
      marqueeContent,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  const handlePartnerClick = (
    e: React.MouseEvent,
    link: string,
    idx: number
  ) => {
    e.preventDefault();
    if (isAnimating || !marqueeRef.current) return;

    setIsAnimating(true);

    // ⏸️ pause marquee
    marqueeTween.current?.pause();

    const clickedElement = e.currentTarget as HTMLElement;
    const container = marqueeRef.current;
    const allPartners = gsap.utils.toArray<HTMLElement>(".partner-item");

    const elementRect = clickedElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const translateX =
      containerRect.left +
      containerRect.width / 2 -
      (elementRect.left + elementRect.width / 2);

    const translateY =
      containerRect.top +
      containerRect.height / 2 -
      (elementRect.top + elementRect.height / 2);

    // fade out yang lain
    allPartners.forEach((partner, index) => {
      if (index !== idx && index !== idx + partners.length) {
        gsap.to(partner, { opacity: 0, duration: 0.3 });
      }
    });

    // timeline biar rapi
    const tl = gsap.timeline({
      onComplete: () => {
        // 🔁 RESET SEMUA
        gsap.set(allPartners, {
          opacity: 0,
          scale: 1,
          x: 0,
          y: 0,
        });

        // reset marquee position ke kanan
        gsap.set(".marquee-content", { x: 0 });

        // fade in kembali
        gsap.to(allPartners, {
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          onComplete: () => {
            setIsAnimating(false);
            marqueeTween.current?.restart();
          },
        });
      },
    });

    tl.to(clickedElement, {
      x: translateX,
      y: translateY,
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out",
    }).to(clickedElement, {
      scale: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    // 🔗 redirect (opsional delay)
    setTimeout(() => {
      window.open(link, "_blank");
    }, 800);
  };

  return (
    <section className="w-full py-16 overflow-hidden">
      <div
        ref={marqueeRef}
        className="marquee-container flex whitespace-nowrap relative max-w-[100rem] mx-auto py-4 overflow-hidden"
      >
        <div className="marquee-content flex gap-12 md:gap-16 px-6">
          {[...partners, ...partners].map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              onClick={(e) =>
                handlePartnerClick(e, partner.link, idx % partners.length)
              }
              className="partner-item flex items-center justify-center min-w-[160px] md:min-w-[220px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-20 md:h-28 w-auto object-contain pointer-events-none"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
