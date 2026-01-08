"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-white.png" width={150} alt="" />
          </div>

          <div className="text-neutral-400 text-sm text-center">
            Copyright {currentYear} © PT. Rabbana Rizqi Jaya
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Rizqi-Tour-Official/61572944504693/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-base" />
            </a>
            <a
              href="https://www.tiktok.com/@rizqitour.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-base" />
            </a>
            <a
              href="https://www.instagram.com/rizqitour.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
