"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        border-t
        border-black/10
        bg-white
        transition-colors
        duration-200
        dark:border-white/10
        dark:bg-[#080b12]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="
                text-lg
                font-semibold
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              Tyndale Antwi
            </Link>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/glaurios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-white/70
                text-slate-700
                backdrop-blur-xl
                transition-all
                duration-200
                hover:scale-110
                hover:bg-slate-50
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
                dark:hover:bg-white/10
              "
            >
              <SiGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/tyndale-antwi-72254235b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-white/70
                text-slate-700
                backdrop-blur-xl
                transition-all
                duration-200
                hover:scale-110
                hover:bg-slate-50
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
                dark:hover:bg-white/10
              "
            >
              <FaLinkedinIn size={17} />
            </a>

            {/* Back to top */}
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Back to top"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-slate-900
                text-white
                transition-all
                duration-200
                hover:scale-110
                dark:bg-white
                dark:text-slate-900
              "
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200 dark:bg-white/10" />

        {/* Copyright */}
        <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Tyndale Anane Antwi. All rights reserved.
          </p>

          <p>
            Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}