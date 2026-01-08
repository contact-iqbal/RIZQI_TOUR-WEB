"use client";

import { useState, useEffect, useRef } from "react";
import { Mukta } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faXmark,
  faHouse,
  faBoxOpen,
  faNewspaper,
  faInfoCircle,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const menuSections = [
  {
    category: "UMROH KAMI",
    featured: {
      title: "Paket Umroh Premium",
      description: "Pengalaman ibadah tak terlupakan dengan layanan terbaik",
      link: "/paket-umroh",
    },
    items: [
      {
        title: "Paket Reguler",
        description: "Umroh dengan harga terjangkau dan fasilitas lengkap",
        link: "/paket-umroh/reguler",
      },
      {
        title: "Paket Plus",
        description: "Tambahan kunjungan ke tempat-tempat bersejarah",
        link: "/paket-umroh/plus",
      },
      {
        title: "Paket VIP",
        description: "Pelayanan eksklusif dengan kenyamanan maksimal",
        link: "/paket-umroh/vip",
      },
    ],
  },
  {
    category: "INFORMASI",
    featured: {
      title: "Artikel & Panduan",
      description: "Tips dan cerita perjalanan umroh dari pelanggan kami",
      link: "/artikel",
    },
    items: [
      {
        title: "Blog Umroh",
        description: "Artikel terbaru tentang tips dan trik umroh",
        link: "/blog",
      },
      {
        title: "Panduan Praktis",
        description: "Panduan lengkap sebelum berangkat umroh",
        link: "/panduan",
      },
      {
        title: "FAQ",
        description: "Pertanyaan yang sering diajukan pelanggan",
        link: "/faq",
      },
    ],
  },
  {
    category: "LAYANAN",
    featured: {
      title: "Hubungi Kami",
      description: "Tim kami siap membantu menjawab semua pertanyaan Anda",
      link: "/kontak",
    },
    items: [
      {
        title: "Tentang Kami",
        description: "Profil dan sejarah perusahaan kami",
        link: "/tentang",
      },
      {
        title: "Kontak",
        description: "Hubungi kami melalui berbagai saluran komunikasi",
        link: "/kontak",
      },
      {
        title: "Testimoni",
        description: "Cerita sukses pelanggan kami",
        link: "/testimoni",
      },
    ],
  },
];

const mobileMenuItems = [
  { title: "Beranda", icon: faHouse, link: "/" },
  { title: "Paket Umroh", icon: faBoxOpen, link: "/paket-umroh" },
  { title: "Paket Reguler", link: "/paket-umroh/reguler", indent: true },
  { title: "Paket Plus", link: "/paket-umroh/plus", indent: true },
  { title: "Paket VIP", link: "/paket-umroh/vip", indent: true },
  { title: "Artikel & Blog", icon: faNewspaper, link: "/artikel" },
  { title: "Blog Umroh", link: "/blog", indent: true },
  { title: "Panduan Praktis", link: "/panduan", indent: true },
  { title: "FAQ", link: "/faq", indent: true },
  { title: "Tentang Kami", icon: faInfoCircle, link: "/tentang" },
  { title: "Testimoni", link: "/testimoni", indent: true },
  { title: "Kontak", icon: faPhone, link: "/kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();

        // ⬆️ scroll ke paling atas
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setMenuOpen(true);

        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <>
      <nav className="px-2 md:px-4 z-50">
        <div className="w-full p-4 flex rounded-tr-xl rounded-tl-xl justify-between md:justify-center items-center gap-0 md:gap-60 px-8 top-0 left-0 right-0 border-b border-neutral-200">
          <a href="/" className="relative w-[140px] h-[40px] overflow-hidden">
            {/* Logo Default */}
            <img
              src="/logo-black.png"
              alt="logo"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out
      ${
        menuOpen
          ? "opacity-0 scale-95 -translate-y-2"
          : "opacity-100 scale-100 translate-y-0"
      }
    `}
            />

            {/* Logo Active */}
            <img
              src="/logo-white.png"
              alt="logo active"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out
      ${
        menuOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-105 translate-y-2"
      }
    `}
            />
          </a>

          <form
            className={`hidden lg:flex py-1 gap-1 bg-black/20 rounded-xl px-1 transition-all duration-500 ${
              menuOpen ? "lg:w-[28rem]" : "w-80"
            }`}
          >
            <div className="relative flex-1 min-w-0">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Cari disini..."
                className="w-full text-black px-6 py-2 rounded-lg bg-white font-mukta focus:outline-none transition-all duration-500"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <kbd
                className={`absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold text-neutral-600 bg-white/60 border border-neutral-300 rounded shadow-sm transition-opacity duration-200 ${
                  searchFocused ? "opacity-0" : "opacity-100"
                }`}
              >
                Ctrl+K
              </kbd>
            </div>
            <button
              type="submit"
              className="text-black bg-white px-3 py-2 rounded-lg hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <div className="flex items-center gap-1">
            <a
              href="mailto:rabbanarizqi@gmail.com"
              className="hidden lg:flex items-center gap-2 px-2 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.instagram.com/rizqitour.official/"
              target="_blank"
              className="hidden lg:flex items-center gap-2 px-2 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@rizqitour.official"
              className="hidden lg:flex items-center gap-2 px-2 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-100 px-3 py-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer relative w-12 h-12"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl absolute transition-all duration-300 text-black ${
                    menuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <FontAwesomeIcon
                  icon={faXmark}
                  className={`text-2xl absolute transition-all duration-300 ${
                    menuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {(menuOpen || isClosing) && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleClose}
          />

          <div
            className={`w-full max-w-7xl mx-auto fixed left-1/2 top-24 bg-white z-40 overflow-hidden ${
              isClosing ? "animate-fluid-close" : "animate-fluid-open"
            }`}
          >
            <div className="lg:hidden max-h-screen overflow-y-auto shadow-2xl py-10">
              <div className="p-4 space-y-3">
                {mobileMenuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={handleClose}
                    className={`group flex items-center gap-4 rounded-xl px-4 py-4 active:scale-[0.97] transition-all duration-200 hover:bg-neutral-100 ${
                      item.indent ? "ml-6" : ""
                    }`}
                    style={{
                      animationDelay: `${idx * 40}ms`,
                    }}
                  >
                    {item.icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)]/20 transition">
                        <FontAwesomeIcon icon={item.icon} className="w-5" />
                      </div>
                    )}

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-800">
                        {item.title}
                      </p>
                    </div>

                    <span className="text-neutral-300 group-hover:text-neutral-500 transition">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex h-96 shadow-2xl">
              <a
                href="/paket-umroh"
                onClick={handleClose}
                className="w-80 bg-[#d8a466] text-white p-8 flex flex-col justify-between hover:brightness-110 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="w-20 h-20 bg-white/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-white/30 transition-all">
                    🕋
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Paket Umroh</h2>
                  <p className="text-sm text-white/90">
                    Wujudkan impian umroh Anda bersama kami dengan pelayanan
                    terbaik
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Jelajahi <span className="ml-1">→</span>
                </div>
              </a>

              <div className="flex-1 grid grid-cols-3 divide-x divide-neutral-200">
                {menuSections.map((section, idx) => (
                  <div key={idx} className="p-6 space-y-4">
                    <h3 className="text-xs font-bold text-neutral-600 tracking-wider uppercase">
                      {section.category}
                    </h3>
                    <div className="space-y-4">
                      {section.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.link}
                          onClick={handleClose}
                          className="block group cursor-pointer"
                        >
                          <h4 className="text-sm font-semibold text-neutral-800 group-hover:text-[var(--primary)] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-500 group-hover:text-neutral-600 transition-colors mt-1">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
