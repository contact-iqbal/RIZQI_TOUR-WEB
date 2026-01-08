"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cursor1Ref = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const cursor3Ref = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (headingRef.current && descriptionRef.current && cardsRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const cursorRefs = [cursor1Ref, cursor2Ref, cursor3Ref];
    if (hoveredCard !== null && cursorRefs[hoveredCard]?.current) {
      cursorRefs[hoveredCard].current.style.transform = `translate(calc(-50% + ${cursorPosition.x}px), calc(-50% + ${cursorPosition.y}px))`;
    }
  }, [cursorPosition, hoveredCard]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (cardIndex: number) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsClicking(false);
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <div className="block md:flex">
            <div className="flex-1 mb-8 md:mb-0">
              <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mr-4">
                / Tentang kami
              </p>
            </div>
            <div ref={headingRef} className="flex-3 flex flex-col justify-end">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                <span className="bg-[var(--primary)] text-white"> Memahami dan Mendampingi</span> Perjalanan Ibadah Umroh
                dan Haji Anda.
              </h2>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                PT. Rabbana Rizqi Jaya adalah biro perjalanan terpercaya yang
                telah memandu ribuan jamaah dalam mewujudkan impian mereka. Kami
                tidak hanya memberikan perjalanan, tetapi pengalaman spiritual
                yang bermakna dan berkah di tanah suci—
              </p>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/pengalaman"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="relative bg-[url('/about_image1.png')] bg-cover bg-center min-h-125 p-8 border border-0 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group active:scale-[0.98]"
              style={{ cursor: hoveredCard === 0 ? "none" : "pointer" }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-4">
                Pengalaman Terbaik
              </div>
              <p className="text-neutral-100 leading-5 drop-shadow-lg">
                Lebih dari 1000 jamaah telah mempercayai kami untuk menunaikan
                ibadah mereka dengan nyaman dan aman.
              </p>

              {hoveredCard === 0 && (
                <div
                  ref={cursor1Ref}
                  className={`absolute pointer-events-none z-50 transition-all duration-75 ${
                    isClicking ? "scale-75 opacity-80" : "scale-100 opacity-100"
                  }`}
                  style={{
                    left: 0,
                    top: 0,
                  }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-black text-4xl font-bold">→</span>
                  </div>
                </div>
              )}
            </a>

            <a
              href="/akomodasi"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="relative bg-[url('/about_image2.png')] bg-cover bg-center min-h-125 p-8 border border-0 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group active:scale-[0.98]"
              style={{ cursor: hoveredCard === 1 ? "none" : "pointer" }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-4">
                Akomodasi Premium
              </div>
              <p className="text-neutral-100 leading-5 drop-shadow-lg">
                Hotel bintang 4 dan 5 yang dipilih khusus, terletak strategis
                dekat Masjidil Haram dan Masjid Nabawi.
              </p>

              {hoveredCard === 1 && (
                <div
                  ref={cursor2Ref}
                  className={`absolute pointer-events-none z-50 transition-all duration-75 ${
                    isClicking ? "scale-75 opacity-80" : "scale-100 opacity-100"
                  }`}
                  style={{
                    left: 0,
                    top: 0,
                  }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-black text-4xl font-bold">→</span>
                  </div>
                </div>
              )}
            </a>

            <a
              href="/tentang"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="relative bg-neutral-900 min-h-125 p-8 border border-0 hover:shadow-lg transition-all duration-300 flex flex-col justify-end overflow-hidden group active:scale-[0.98]"
              style={{ cursor: hoveredCard === 2 ? "none" : "pointer" }}
            >
              <div className="text-xl font-semibold tracking-wide mb-4">
                Ingin Tahu Tentang Kami Lebih Lanjut?
              </div>
              <p className="text-neutral-200 underline">
                Lihat selengkapnya
              </p>

              {hoveredCard === 2 && (
                <div
                  ref={cursor3Ref}
                  className={`absolute pointer-events-none z-50 transition-all duration-75 ${
                    isClicking ? "scale-75 opacity-80" : "scale-100 opacity-100"
                  }`}
                  style={{
                    left: 0,
                    top: 0,
                  }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-black text-4xl font-bold">→</span>
                  </div>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
