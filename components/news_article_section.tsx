"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const featuredArticles = [
  {
    id: 1,
    title: "Persiapan Kesehatan Sebelum Umroh",
    description:
      "Ibadah umroh adalah perjalanan spiritual yang penuh berkah, namun membutuhkan persiapan fisik yang matang agar dapat [...]",
    date: "23 November",
    image: "/article1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Umroh Tanpa Ribet di Rizqi Tour",
    description:
      "Menunaikan ibadah umroh adalah impian banyak umat Muslim di seluruh dunia. Namun, meskipun ibadah ini memiliki makna spiritual yang  [...]",
    date: "23 November",
    image: "/article2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Rekomendasi Perlengkapan Umroh",
    description:
      "Berangkat umroh adalah momen spiritual yang membutuhkan persiapan matang, termasuk memastikan perlengkapan yang dibawa sesuai kebutuhan  [...]",
    date: "23 November",
    image: "/article3.jpg",
    link: "#",
  },
];

const sideArticles = [
  {
    id: 1,
    title: "Manfaat Umroh untuk Kesehatan Mental",
    date: "20 februari",
    link: "/artikel/manfaat-umroh",
  },
  {
    id: 2,
    title: "Doa-doa Penting Saat Umroh",
    date: "20 februari",
    link: "/artikel/doa-umroh",
  },
  {
    id: 3,
    title: "Persiapan Kesehatan Sebelum Umroh",
    date: "20 februari",
    link: "/artikel/persiapan-kesehatan",
  },
];

export default function NewsArticleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const sideListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (sideListRef.current) {
        gsap.fromTo(
          sideListRef.current.children,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sideListRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="block md:flex mb-16">
          <div className="flex-3 flex flex-col justify-end">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 flex">
              Berita &
              <span className="bg-[var(--primary)] text-white">Artikel</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div ref={featuredRef} className="lg:col-span-7 space-y-8">
            {featuredArticles.map((article) => (
              <a key={article.id} href={article.link} className="group block">
                <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl hover:bg-neutral-50 transition-all duration-300">
                  <div className="flex-shrink-0 w-full sm:w-72 h-56 bg-neutral-300 rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[var(--primary)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {article.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {article.date}
                      </span>
                      <div className="flex items-center gap-2 text-neutral-900 group-hover:text-[var(--primary)] transition-colors">
                        <span className="font-medium">Baca</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="h-full w-px bg-neutral-200 mx-auto" />
          </div>

          <div ref={sideListRef} className="lg:col-span-4 space-y-6">
            {sideArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="group block p-6 rounded-xl hover:bg-neutral-50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-neutral-500 mb-2">
                      {article.date}
                    </p>
                    <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[var(--primary)] transition-colors">
                      {article.title}
                    </h4>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-neutral-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/artikel"
            className="px-8 py-3 text-[var(--secondary)] border-2 border-[var(--secondary)] font-semibold rounded-full hover:bg-[var(--secondary)] hover:text-white transition-all duration-300"
          >
            Lebih banyak Artikel
          </a>
        </div>
      </div>
    </section>
  );
}
