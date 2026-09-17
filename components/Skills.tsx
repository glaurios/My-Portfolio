"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "APIs", icon: null },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const groupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 sm:mb-14"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Skills
          </p>

          <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Technologies I use to{" "}
            <span className="text-slate-400 dark:text-slate-500">
              build.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-400">
            A focused set of technologies I use to design, develop, and
            deploy modern digital products.
          </p>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={groupVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group rounded-3xl
                border border-slate-200/80
                bg-white/70
                p-6
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                backdrop-blur-xl
                transition-all duration-300
                hover:border-slate-300
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-white/20
                dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              {/* Category heading */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {group.title}
                </h3>

                <motion.div
                  className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600"
                  whileHover={{ scale: 1.6 }}
                />
              </div>

              {/* Skills */}
              <motion.div
                variants={containerVariants}
                className="space-y-2"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants = {itemVariants}
                      whileHover={{ x: 5 }}
                      className="
                        flex items-center gap-4
                        rounded-2xl
                        border border-transparent
                        px-3 py-3
                        transition-colors duration-300
                        hover:border-slate-200
                        hover:bg-slate-50
                        dark:hover:border-white/10
                        dark:hover:bg-white/[0.04]
                      "
                    >
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        transition={{ duration: 0.2 }}
                        className="
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-xl
                          bg-slate-100
                          text-xl
                          text-slate-700
                          dark:bg-white/10
                          dark:text-white
                        "
                      >
                        {Icon ? (
                          <Icon />
                        ) : (
                          <span className="text-[10px] font-bold tracking-tight">
                            API
                          </span>
                        )}
                      </motion.div>

                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}