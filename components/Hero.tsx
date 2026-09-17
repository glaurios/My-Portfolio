
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const phrases = [
  "Building modern digital and professional experiences.",
  "Crafting clean and responsive web applications.",
  "Turning ideas into powerful digital products.",
  "Designing interfaces people love to use.",
  "Creating fast, scalable and modern web experiences.",
  "Developing seamless full-stack applications.",
  "Bringing creative ideas to life with code.",
  "Building elegant solutions for real-world problems.",
  "Creating experiences that look and feel exceptional.",
  "Engineering modern software with purpose.",
  "Transforming concepts into working products.",
  "Designing and developing the future of the web.",
  "Writing clean code for meaningful experiences.",
  "Building technology that makes an impact.",
  "Creating digital experiences that stand out.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    // Still typing
    if (displayText.length < currentPhrase.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(
          currentPhrase.slice(0, displayText.length + 1)
        );
      }, 70);

      return () => clearTimeout(typingTimer);
    }

    // Phrase is complete — wait before changing
    const pauseTimer = setTimeout(() => {
      // Clear instantly
      setDisplayText("");

      // Move to the next phrase
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearTimeout(pauseTimer);
  }, [displayText, phraseIndex]);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-white
        transition-colors
        duration-200
        dark:bg-[#080b12]
      "
    >
      <div className="relative z-10 w-full max-w-5xl px-5 text-center sm:px-6">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-slate-500
            transition-colors
            duration-150
            dark:text-slate-400
          "
        >
          FullStack Developer
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-6
            text-[2.75rem]
            font-bold
            text-slate-900
            transition-colors
            duration-150
            sm:text-6xl
            md:text-8xl
            dark:text-white
          "
        >
          Tyndale
          <br />
          Antwi
        </motion.h1>

        {/* Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-8
            flex
            min-h-[56px]
            w-full
            flex-wrap
            items-center
            justify-center
            px-2
            text-base
            leading-7
            sm:min-h-[32px]
            sm:text-lg
            text-slate-500
            dark:text-slate-400
          "
        >
          <span>{displayText}</span>

          {/* Cursor */}
          <span
            className="
              ml-1
              inline-block
              h-6
              w-[2px]
              animate-pulse
              bg-slate-900
              dark:bg-yellow-400
            "
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
         <Link
  href="/projects"
  className="
    w-full
    max-w-xs
    rounded-full
    bg-slate-900
    px-8
    py-4
    text-white
    transition-all
    duration-200
    hover:scale-105
    sm:w-auto
    sm:max-w-none
    dark:bg-white
    dark:text-slate-900
  "
>
  View Projects
</Link>

          <Link
            href="/contact"
            className="
              w-full
              max-w-xs
              rounded-full
              border
              border-slate-300
              px-8
              py-4
              text-slate-700
              transition-all
              duration-200
              hover:scale-105
              hover:bg-slate-100
              sm:w-auto
              sm:max-w-none
              dark:border-white/20
              dark:text-slate-200
              dark:hover:bg-white/10
            "
          >
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

