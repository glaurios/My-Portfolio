"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        transition-colors
        duration-200
        dark:bg-[#080b12]
        sm:py-28
        md:py-44
      "
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-400/10
            blur-[140px]
            dark:bg-blue-500/10
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 25, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-120px]
            top-20
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-400/10
            blur-[120px]
            dark:bg-purple-500/10
          "
        />
      </div>

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          dark:opacity-[0.04]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:70px_70px]
          dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-black/10
            bg-white/65
            p-6
            shadow-2xl
            shadow-black/[0.04]
            backdrop-blur-2xl
            dark:border-white/10
            dark:bg-white/[0.04]
            dark:shadow-black/20
            sm:p-8
            md:p-14
            lg:p-20
          "
        >
          {/* Inner glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[-80px]
              h-64
              w-64
              rounded-full
              bg-blue-400/10
              blur-[90px]
              dark:bg-blue-500/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-80px]
              left-[-80px]
              h-64
              w-64
              rounded-full
              bg-purple-400/10
              blur-[90px]
              dark:bg-purple-500/10
            "
          />

          <div className="relative z-10 max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/80
                  text-slate-700
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <Mail size={17} />
              </div>

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Let&apos;s work together
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="
                mt-8
                text-[2.75rem]
                font-bold
                tracking-tight
                text-slate-900
                sm:text-5xl
                md:text-7xl
                lg:text-8xl
                dark:text-white
              "
            >
              Have an idea
              <br />
              worth building?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
                text-slate-500
                dark:text-slate-400
              "
            >
              Whether you&apos;re starting something new, improving an existing
              product, or simply want to talk through an idea, I&apos;d love to
              hear from you.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-slate-900
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-slate-800
                  dark:bg-white
                  dark:text-slate-900
                  dark:hover:bg-slate-100
                "
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* Decorative corner element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="
              absolute
              bottom-10
              right-10
              hidden
              h-28
              w-28
              rounded-full
              border
              border-black/10
              bg-white/30
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
              md:block
            "
          >
            <div className="absolute inset-4 rounded-full border border-black/10 dark:border-white/10" />

            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 dark:bg-yellow-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}