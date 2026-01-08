"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    name: "Bapak Yudha & Istri",
    title: "DNA Advertising",
    platform: "Google Maps",
    rating: 5,
    content:
      "Alhamdulillah umroh bersama Rizqi Tour Umroh terjamin, Fasilitas semua terjamin. Jangan ragu Umroh bareng Rizqi Tour Insha Allah Amanah.",
    image: "/Testi-Web-6.webp",
    bgColor: "bg-neutral-900",
  },
  {
    name: "Bapak Genta & Istri",
    title: "-",
    platform: "Trustpilot",
    rating: 4,
    content:
      "Alhamdulillah seneng banget umroh bareng rizqi tour, secara servis & fasilitas benar-benar sesuai dengan yang ditawarkan. Jadi sesuai taglinenya yaitu Dapat di Percaya.",
    image: "/Testi-Web-8.webp",
    bgColor: "bg-[#d8a466]",
  },
];

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full py-16 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="block md:flex">
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mr-4">
              / Testimoni
            </p>
          </div>
          <div className="flex-3 flex flex-col justify-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Apa Kata
              <span className="bg-[var(--primary)] text-white">
                {" "}
                Jamaah Kami?
              </span>{" "}
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Mendengar langsung pengalaman berharga dari para jamaah yang telah
              mempercayakan perjalanan ibadah mereka kepada kami.
            </p>
          </div>
        </div>
        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="testimonial-swiper max-w-md sm:max-w-lg md:max-w-4xl mx-auto"
          cardsEffect={{
            perSlideOffset: 6,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: false,
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${t.bgColor} rounded-3xl p-6 md:p-10 shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-10 min-h-[360px] md:min-h-[420px]`}
              >
                {/* Content */}
                <div className="flex-1 text-white space-y-4 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, idx) => {
                      const isActive = idx < t.rating;

                      return (
                        <div
                          key={idx}
                          className={`w-9 h-9 flex items-center justify-center ${
                            isActive ? "bg-[#00b67a]" : "bg-neutral-400"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-white text-sm"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed">
                    {t.content}
                  </p>

                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-white/80 text-xs">{t.title}</p>
                    <p className="text-white/60 text-xs mt-1">
                      Reviewed on {t.platform}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        :global(.testimonial-swiper) {
          padding: 40px 0;
        }
      `}</style>
    </section>
  );
}
