"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Duks Juice",
    category: "E-Commerce",
    description:
      "A complete juice and smoothie e-commerce experience with product browsing, cart functionality, authentication and online payments.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Paystack"],
    url: "https://www.duksjuice.com/",
    image: "/projects/duks-juice.png",
    gradient: "from-orange-400 via-yellow-300 to-green-400",
    number: "01",
  },
  {
    title: "GRIMS",
    category: "Gaming Platform",
    description:
      "A competitive gaming platform featuring player profiles, tournaments, leaderboards and result management.",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    url: "https://grimswebsite-2y5j5p786-adriens-projects-936834d0.vercel.app/",
    image: "/projects/grims.png",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    number: "02",
  },
  {
    title: "Pulse Dashboard",
    category: "Analytics Dashboard",
    description:
      "A modern dashboard experience focused on metrics, analytics, data visualization and polished responsive interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://pulse-dashboard-tan-nu.vercel.app/",
    image: "/projects/pulse-dashboard.png",
    gradient: "from-fuchsia-400 via-purple-500 to-indigo-600",
    number: "03",
  },
];

export default function SelectedProjects() {
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
        md:py-40
      "
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-400/10
            blur-[130px]
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-purple-400/10
            blur-[130px]
            dark:bg-purple-500/10
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-slate-500
                dark:text-slate-400
              "
            >
              View my work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.7 }}
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
              Things I’ve built.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-700
                transition-colors
                hover:text-slate-900
                dark:text-slate-300
                dark:hover:text-white
              "
            >
              View all projects
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-10 md:mt-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                grid
                overflow-hidden
                rounded-[2rem]
                border
                border-black/10
                bg-white/60
                shadow-xl
                shadow-black/[0.03]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-black/[0.07]
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/20
                lg:grid-cols-[1.05fr_0.95fr]
              "
            >
              {/* Visual side */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  bg-slate-100
                  dark:bg-slate-900
                  lg:aspect-auto
                  lg:min-h-[430px]
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                  sizes="
                    (max-width: 1023px) 100vw,
                    55vw
                  "
                />

                {/* Readability overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/55
                    via-black/5
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/20
                    bg-black/25
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-md
                    sm:left-6
                    sm:top-6
                    sm:px-4
                    sm:py-2
                  "
                >
                  {project.category}
                </div>

                {/* Number */}
                <span
                  className="
                    absolute
                    bottom-5
                    left-6
                    text-sm
                    font-medium
                    text-white/70
                    sm:bottom-6
                    sm:left-7
                  "
                >
                  {project.number}
                </span>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                <div>
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-slate-400
                      dark:text-slate-500
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-slate-900
                      md:text-4xl
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-base
                      leading-7
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-black/10
                          bg-slate-50
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-slate-600
                          dark:border-white/10
                          dark:bg-white/5
                          dark:text-slate-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-slate-900
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-200
                      hover:scale-105
                      hover:bg-slate-800
                      dark:bg-white
                      dark:text-slate-900
                      dark:hover:bg-slate-100
                    "
                  >
                    View project
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-200
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              bg-white/70
              px-6
              py-3
              text-sm
              font-medium
              text-slate-700
              backdrop-blur-xl
              transition-all
              duration-200
              hover:scale-105
              hover:bg-slate-50
              dark:border-white/10
              dark:bg-white/5
              dark:text-slate-200
              dark:hover:bg-white/10
            "
          >
            Explore all five projects
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}