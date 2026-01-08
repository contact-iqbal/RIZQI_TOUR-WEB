"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const pricingPackages = [
  {
    name: "Paket Reguler",
    duration: "9 Hari",
    price: "27.900.000",
    period: "/orang",
    description: "Paket ekonomis dengan fasilitas lengkap untuk ibadah nyaman",
    features: [
      "Tiket PP",
      "Hotel",
      "Visa & Asuransi",
      "Makan 3x sehari",
      "Bagasi 30kg",
      "dan lain-lain",
    ],
    popular: false,
  },
  {
    name: "Paket Umroh + Wisata Dubai",
    duration: "13 Hari",
    price: "33.900.000",
    period: "/orang",
    description: "Paket umroh dengan tambahan wisata menarik di Dubai",
    features: [
      "Tiket PP",
      "Hotel",
      "Visa & Asuransi",
      "Makan 3x sehari",
      "Bagasi 30kg",
      "dan lain-lain",
    ],
    popular: true,
  },
  {
    name: "Paket Umroh + Wisata Turki",
    duration: "14 Hari",
    price: "38.900.000",
    period: "/orang",
    description:
      "Paket premium dengan pelayanan eksklusif dan fasilitas terbaik",
    features: [
      "Tiket PP",
      "Hotel",
      "Visa & Asuransi",
      "Makan 3x sehari",
      "Bagasi 30kg",
      "dan lain-lain",
    ],
    popular: false,
  },
  // {
  //   name: "Paket Haji",
  //   duration: "40 Hari",
  //   price: "85.000.000",
  //   period: "/orang",
  //   description: "Paket haji dengan pendampingan penuh dan fasilitas terlengkap",
  //   features: [
  //     "Hotel bintang 4-5",
  //     "Pesawat charter",
  //     "Makan 3x premium",
  //     "Pembimbing berpengalaman",
  //     "Layanan kesehatan 24 jam",
  //     "Ziarah lengkap",
  //     "Visa & Asuransi",
  //     "Bus AC private",
  //   ],
  //   popular: false,
  // },
];

export default function PricingSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
          >
            Pilih Paket <span className="text-[var(--primary)]">Terbaik</span>{" "}
            <span className="underline">Untuk Anda</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Kami menyediakan berbagai pilihan paket umroh dan haji yang dapat
            disesuaikan dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div
          ref={cardsRef}
          className="block lg:flex gap-6 justify-center items-stretch"
        >
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative mb-5 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${
                pkg.popular
                  ? "border-2 border-[var(--primary)] transform lg:scale-105"
                  : "border border-neutral-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} className="text-xs" />
                  Terpopuler
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-neutral-600">Rp</span>
                  <span className="text-4xl font-bold text-neutral-900">
                    {pkg.price.slice(0, 2)}
                  </span>
                  <span className="text-2xl font-bold text-neutral-900">
                    .{pkg.price.slice(2)}
                  </span>
                  <span className="text-sm text-neutral-600">{pkg.period}</span>
                </div>
                <p className={`text-sm font-semibold ${pkg.popular ? "text-[var(--primary)]" : "text-[var(--secondary)]"}`}>
                  {pkg.duration}
                </p>
              </div>

              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          pkg.popular
                            ? "bg-[var(--primary)]"
                            : "bg-neutral-200"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={`text-xs ${
                            pkg.popular ? "text-white" : "text-neutral-600"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-neutral-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[var(--primary)] text-white hover:brightness-110 cursor-pointer"
                    : "bg-[var(--secondary)] text-white hover:bg-neutral-800 cursor-pointer"
                }`}
              >
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
