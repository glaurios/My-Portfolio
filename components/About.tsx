"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Layers3, PenTool } from "lucide-react";
import { useRef } from "react";

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    text: "Building responsive, polished interfaces with strong attention to performance, interaction and detail.",
  },
  {
    icon: Layers3,
    title: "Full Stack Development",
    text: "Connecting thoughtful user experiences with reliable backend systems, APIs and application logic.",
  },
  {
    icon: PenTool,
    title: "UI / UX",
    text: "Designing digital experiences that feel intuitive, modern and visually refined.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const headingY = useTransform(scrollYProgress, [0, 1], [35, -25]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0.25, 1]);

  return (
    <section
      ref={sectionRef}
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
      <motion.div
        style={{ y: backgroundY }}
        className="
          pointer-events-none
          absolute
          -left-32
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-400/10
          blur-[120px]
          dark:bg-blue-500/10
        "
      />

      <motion.div
        style={{ y: backgroundY }}
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-[380px]
          w-[380px]
          rounded-full
          bg-purple-400/10
          blur-[120px]
          dark:bg-purple-500/10
        "
      />

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        {/* Section heading */}
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-slate-500
                dark:text-slate-400
              "
            >
              About me
            </p>

            <motion.h2
              style={{
                y: headingY,
                opacity: headingOpacity,
              }}
              className="
                mt-5
                text-[2.75rem]
                font-bold
                tracking-tight
                text-slate-900
                sm:text-5xl
                md:text-7xl
                dark:text-white
              "
            >
              Building with
              <br />
              purpose.
            </motion.h2>
          </motion.div>

          {/* Right */}
          <div>

            {/* Main statement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
            
<p
  className="
    max-w-3xl
    font-roboto-slab
    text-base
    font-normal
    leading-relaxed
    tracking-tight
    text-slate-900
    sm:text-lg
    md:text-xl
    lg:text-[29px]
    dark:text-white
  "
>
  I’m a Full Stack Developer focused on creating modern digital
  products that combine thoughtful design, strong engineering
  and meaningful user experiences.
</p>

            </motion.div>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="
                mt-8
                max-w-3xl
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
                text-slate-500
                dark:text-slate-400
              "
            >
              I enjoy taking an idea from the first concept through design,
              development and deployment. My approach is simple: keep the
              experience intuitive, the interface refined and the underlying
              technology dependable.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="
                mt-14
                h-px
                origin-left
                bg-slate-200
                dark:bg-white/10
              "
            />

            {/* Capability cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.15 + index * 0.12,
                      duration: 0.65,
                    }}
                    whileHover={{ y: -6 }}
                    className="
                      group
                      rounded-3xl
                      border
                      border-black/10
                      bg-white/60
                      p-6
                      shadow-xl
                      shadow-black/[0.03]
                      backdrop-blur-xl
                      transition-colors
                      duration-200
                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:shadow-black/20
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-black/10
                        bg-slate-50
                        text-slate-800
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-3
                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-white
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <h3
                      className="
                        mt-6
                        text-lg
                        font-semibold
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="
                mt-16
                rounded-3xl
                border
                border-black/10
                bg-slate-50/70
                p-8
                dark:border-white/10
                dark:bg-white/[0.035]
                md:p-10
              "
            >
              <p
                className="
                  text-xl
                  font-medium
                  leading-relaxed
                  tracking-tight
                  text-slate-800
                  dark:text-slate-200
                  md:text-2xl
                "
              >
                “Good software should not only work well.
                <span className="text-slate-400 dark:text-slate-500">
                  {" "}
                  It should feel right.
                </span>
                ”
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}