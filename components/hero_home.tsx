"use client";

// import Navbar from "../components/navbar";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

export default function HeroHome() {
  const lantern1Ref = useRef<HTMLImageElement>(null);
  const lantern2Ref = useRef<HTMLImageElement>(null);
  const lantern3Ref = useRef<HTMLImageElement>(null);
  const lantern4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (lantern1Ref.current) {
      gsap.to(lantern1Ref.current, {
        y: -15,
        rotation: 3,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (lantern2Ref.current) {
      gsap.to(lantern2Ref.current, {
        y: -20,
        rotation: -4,
        duration: 3.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (lantern3Ref.current) {
      gsap.to(lantern3Ref.current, {
        y: -18,
        rotation: 5,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (lantern4Ref.current) {
      gsap.to(lantern4Ref.current, {
        y: -22,
        rotation: -3,
        duration: 3.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="px-2 md:px-4 pb-2 md:pb-4">
      <div className="w-full bg-gradient-to-br from-[#eabb81] via-[var(--primary)] to-[#b48448] pt-20 relative overflow-hidden flex items-center rounded-xl">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-white opacity-3 rounded-full blur-3xl"></div>

        {/* Lanterns - Responsive positioning with independent animations */}
        <img
          ref={lantern1Ref}
          src="/lantern.png"
          className="absolute hidden lg:block top-32 left-4 md:top-40 md:left-12 lg:left-20 w-8 md:w-12 lg:w-14 z-10 drop-shadow-lg"
          alt="Lantern decoration"
        />
        <img
          ref={lantern2Ref}
          src="/lantern.png"
          className="hidden md:block absolute top-28 right-1/4 lg:right-1/3 w-10 lg:w-12 z-10 drop-shadow-lg"
          alt="Lantern decoration"
        />
        <img
          ref={lantern3Ref}
          src="/lantern.png"
          className="hidden lg:block absolute top-36 right-20 w-8 z-10 drop-shadow-lg"
          alt="Lantern decoration"
        />
        <img
          ref={lantern4Ref}
          src="/lantern.png"
          className="absolute bottom-40 left-0 md:bottom-32 md:left-8 w-10 md:w-12 z-10 drop-shadow-lg"
          alt="Lantern decoration"
        />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col justify-center text-white space-y-6">
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 border-2 border-white rounded-full text-white text-sm md:text-base font-semibold hover:bg-white hover:text-[#1e5a96] transition-all duration-300">
                    Panduan Perjalanan
                  </button>
                  <button className="px-3 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#1e5a96] transition-all duration-300">
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                </div>

                <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-[poppins]">
                  Langkah Baik{" "}
                  <span className="text-[var(--sub)] underline">
                    Menuju Baitullah
                  </span>
                </h1>

                <p className="text-base md:text-lg text-gray-100 max-w-md leading-relaxed font-[mukta]">
                  Awal perjalanan suci penuh niat dan doa. Wujudkan ibadah umroh
                  yang berkah bersama kami.
                </p>

                {/* chatbar - hidden on mobile */}
                <div className="hidden lg:block w-full max-w-2xl">
                  <div className="bg-white rounded-full p-2 flex items-center shadow-xl">
                    <input
                      type="text"
                      placeholder="Halo, saya ingin memesan paket umroh..."
                      className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400 text-base rounded-full"
                    />
                    <button
                      className="ml-2 w-12 h-12 flex items-center justify-center rounded-full
                    bg-[var(--primary)]
                    text-white hover:scale-105 active:scale-95 transition flex-shrink-0"
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-lg"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Images */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Airplane */}
                <img
                  src="/pesawat.png"
                  alt="Pesawat"
                  className="absolute top-0 right-0 md:top-[-40] md:right-4 lg:top-[-40] lg:right-8 w-32 md:w-48 lg:w-56 xl:w-64 z-10 drop-shadow-2xl pointer-events-none"
                />

                {/* Package Card */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 lg:bottom-12 lg:right-12 z-10 backdrop-blur-md bg-white/20 rounded-2xl p-4 md:p-6 shadow-2xl max-w-sm">
                  <h3 className="font-bold text-white drop-shadow-lg text-lg md:text-xl mb-2">
                    Paket Umroh Eksklusif
                  </h3>
                  <p className="text-sm text-white/90 mb-4 drop-shadow-lg">
                    Kenyamanan + Kualitas + Pelayanan Terbaik
                  </p>
                  <button className="w-full bg-white text-[var(--sub)] font-bold py-2 md:py-3 rounded-lg hover:bg-neutral-200 transition-all duration-300 text-sm md:text-base">
                    <a href="#">Lihat paket</a>
                  </button>
                </div>

                {/* People Image - Background */}
                <div className="absolute inset-0 md:inset-4 lg:inset-8 rounded-2xl">
                  <img
                    src="/people.png"
                    alt="People"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
