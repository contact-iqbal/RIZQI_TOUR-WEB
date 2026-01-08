"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PromotionBanner() {
  return (
    <section className="w-full py-4 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full min-h-[500px] md:min-h-[250px] bg-[url('/banner.png')] bg-cover bg-center overflow-hidden flex">
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Umroh Lebih Mudah bersama Rizqi Tour
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
                Dapatkan informasi terbaru seputar paket umroh, promo menarik,
                dan tips perjalanan ibadah langsung ke email Anda.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 group"
              >
                <span>Jadi Yang Pertama!</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
