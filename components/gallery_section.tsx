"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const galleryItems = [
  { image: "/Testi-Web-1.webp", alt: "Gallery Image 1" },
  { image: "/Testi-Web-2.webp", alt: "Gallery Image 2" },
  { image: "/Testi-Web-3.webp", alt: "Gallery Image 3" },
  { image: "/Testi-Web-4.webp", alt: "Gallery Image 4" },
  { image: "/Testi-Web-5.webp", alt: "Gallery Image 5" },
];

export default function GallerySection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="block lg:flex">
          <div className="flex-5 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              <span className="bg-[var(--primary)] text-white">
                Galeri Perjalanan
              </span>
              &nbsp;
              <span className="underline">Kami.</span>
            </h2>
            <p className="md:text-lg text-neutral-600 max-w-2xl">
              Dokumentasi perjalanan kami melalui foto-foto yang menangkap
              momen-momen berharga dan pengalaman tak terlupakan.
            </p>
          </div>
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mr-4">
              / Galeri
            </p>
          </div>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item) => (
              <SwiperSlide className="gallery-slide">
                <div className="gallery-card group">
                  <div className="w-full h-full bg-neutral-400 shadow-lg rounded-2xl transition-all duration-500 group-hover:bg-neutral-500 group-hover:shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden rounded-2xl">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/galeri"
            className="px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(.gallery-swiper) {
          padding: 60px 0;
          overflow: visible;
        }

        :global(.gallery-slide) {
          width: 320px;
          height: 400px;
        }

        :global(.gallery-card) {
          width: 100%;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        :global(.gallery-card:hover) {
          transform: translateY(-20px);
        }

        :global(.swiper-slide-active .gallery-card) {
          transform: scale(1.05);
        }

        :global(.swiper-slide-active .gallery-card:hover) {
          transform: scale(1.05) translateY(-20px);
        }

        @media (max-width: 768px) {
          :global(.gallery-slide) {
            width: 260px;
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
