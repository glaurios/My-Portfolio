"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Duks Juice",
    category: "E-Commerce",
    description:
      "A modern juice and smoothie e-commerce experience with product browsing, cart functionality, authentication and online payments.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Paystack",
    ],
    image: "/projects/duks-juice.png",
    liveUrl: "https://www.duksjuice.com/",
    githubUrl: "#",
  },

  {
    title: "GRIMS",
    category: "Gaming Platform",
    description:
      "A tournament and leaderboard platform designed for competitive gaming, player profiles, tournament management and results.",
    technologies: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/grims.png",
    liveUrl:
      "https://grimswebsite-2y5j5p786-adriens-projects-936834d0.vercel.app/",
    githubUrl: "#",
  },

  {
    title: "Pet Care+",
    category: "Web Application",
    description:
      "A modern pet care platform designed to make pet management, care and related services easier through a clean digital experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/pet-care.png",
    liveUrl: "https://petcare-coral.vercel.app/",
    githubUrl: "#",
  },

  {
    title: "Quick Cart",
    category: "E-Commerce",
    description:
      "A fast and modern shopping experience focused on streamlined product browsing, cart management and a clean checkout flow.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/quick-cart.png",
    liveUrl: "https://fast-cart-sandy.vercel.app/",
    githubUrl: "#",
  },

  {
    title: "Pulse Dashboard",
    category: "Analytics Dashboard",
    description:
      "A modern analytics dashboard demo featuring data visualization, performance insights, metrics and a polished responsive interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/pulse-dashboard.png",
    liveUrl: "https://pulse-dashboard-tan-nu.vercel.app/",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        transition-colors
        duration-150
        dark:bg-[#080b12]
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div
          className="
            absolute
            left-[-150px]
            top-[-150px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-400/10
            blur-[120px]
            dark:bg-blue-500/10
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-400/10
            blur-[120px]
            dark:bg-purple-500/10
          "
        />

        {/* Green glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-400/5
            blur-[120px]
            dark:bg-emerald-400/5
          "
        />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="
          fixed
          left-4
          top-4
          sm:left-6
          sm:top-6
          z-50
          flex
          items-center
          gap-2
          rounded-full
          border
          border-black/10
          bg-white/70
          px-4
          py-2.5
          text-sm
          text-slate-700
          shadow-lg
          backdrop-blur-xl
          transition-all
          duration-200
          hover:scale-105
          hover:bg-white
          dark:border-white/10
          dark:bg-white/10
          dark:text-slate-200
          dark:hover:bg-white/15
        "
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      {/* Page content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          py-24
          sm:px-6
          md:px-10
          md:py-28
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
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
            Selected work
          </p>

          <h1
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
            Projects.
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              sm:text-lg
              sm:leading-8
              text-slate-500
              dark:text-slate-400
            "
          >
            A collection of digital products, applications and experiences
            I&apos;ve designed and developed.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15 + index * 0.15,
                duration: 0.6,
              }}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-black/10
                bg-white/60
                shadow-2xl
                shadow-black/5
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-black/10
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-black/20
              "
            >
              {/* Project screenshot */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  sm:aspect-[16/7]
                  bg-slate-100
                  dark:bg-slate-900
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  priority={index < 2}
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                  sizes="
                    (max-width: 1024px) 100vw,
                    50vw
                  "
                />

                {/* Screenshot overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Category */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-white
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  {project.category}
                </div>

                {/* Hover View Project */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-slate-900
                      shadow-2xl
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-7 md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <h2
                    className="
                      text-2xl
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h2>

                  <ArrowUpRight
                    size={22}
                    className="
                      shrink-0
                      text-slate-400
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      dark:text-slate-500
                    "
                  />
                </div>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
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

                {/* Action buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {/* Live project */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
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
                    View Project
                    <ArrowUpRight size={16} />
                  </a>

                  {/* GitHub */}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-300
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-slate-100
                        dark:border-white/15
                        dark:text-slate-200
                        dark:hover:bg-white/10
                      "
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}