"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Settings,
  Sun,
  Moon,
  Monitor,
  Check,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSettings() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [open, setOpen] = useState(false);

  if (!mounted) {
    return null;
  }

  const themes = [
    {
      id: "light",
      label: "Light",
      icon: Sun,
    },
    {
      id: "dark",
      label: "Dark",
      icon: Moon,
    },
    {
      id: "system",
      label: "System",
      icon: Monitor,
    },
  ];

  return (
    <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
      {/* Settings Button */}
      <motion.button
        type="button"
        aria-label="Open theme settings"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-white/10
          text-slate-700 dark:text-white
          shadow-lg shadow-black/5
          backdrop-blur-xl
          transition-colors
          hover:bg-white dark:hover:bg-white/15
          focus:outline-none
          focus:ring-2
          focus:ring-slate-400/40
        "
      >
        <Settings size={19} strokeWidth={1.8} />
      </motion.button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="
              absolute right-0 top-14
              w-48
              overflow-hidden
              rounded-2xl
              border border-black/10 dark:border-white/10
              bg-white/80 dark:bg-slate-900/80
              p-2
              shadow-2xl shadow-black/10
              backdrop-blur-2xl
            "
          >
            <div className="px-3 pb-2 pt-2">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Appearance
              </p>
            </div>

            <div className="space-y-1">
              {themes.map((item) => {
                const Icon = item.icon;
                const active = theme === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setTheme(item.id);
                      setOpen(false);
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-2.5
                      text-sm
                      transition-all
                      ${
                        active
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                          : "text-slate-700 hover:bg-black/5 dark:text-slate-200 dark:hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon size={17} strokeWidth={1.8} />

                    <span className="flex-1 text-left">
                      {item.label}
                    </span>

                    {active && (
                      <Check size={15} strokeWidth={2} />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}