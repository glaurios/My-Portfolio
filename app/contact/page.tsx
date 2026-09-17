
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus("success");
      setStatusMessage(data.message || "Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white transition-colors duration-150 dark:bg-[#080b12]">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-200px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-400/10
            blur-[120px]
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-400/10
            blur-[120px]
            dark:bg-purple-500/10
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 py-24 sm:px-6 md:px-8">
        <div className="grid w-full gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
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
              Get in touch
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
              Let&apos;s build
              <br />
              something.
            </h1>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
                text-slate-500
                dark:text-slate-400
              "
            >
              Have a project, idea, or opportunity you&apos;d like to discuss?
              Send me a message and I&apos;ll get back to you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">

              {/* Email */}
              <a
                href="mailto:antwityndale@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-slate-700
                  dark:text-slate-200
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-black/10
                    bg-white/70
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Mail size={18} />
                </div>

                <span className="min-w-0 break-all group-hover:underline">
                  antwityndale@gmail.com
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-black/10
                    bg-white/70
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Phone size={18} />
                </div>

                <span>+233 554242524</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-black/10
                    bg-white/70
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <MapPin size={18} />
                </div>

                <span>Ghana</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/glaurios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
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
                  hover:bg-slate-100
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                  dark:hover:bg-white/10
                "
              >
                <SiGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tyndale-antwi-72254235b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
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
                  hover:bg-slate-100
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                  dark:hover:bg-white/10
                "
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-black/10
              bg-white/60
              p-6
              shadow-2xl
              shadow-black/5
              backdrop-blur-2xl
              md:p-8
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-slate-400
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-white/30
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="yourname@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-slate-400
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-white/30
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-slate-400
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-white/30
                  "
                />
              </div>

              {/* Honeypot field for basic spam protection */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-slate-900
                  px-6
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                  hover:bg-slate-800
                  dark:bg-white
                  dark:text-slate-900
                  dark:hover:bg-slate-100
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:scale-100
                "
              >
                {status === "sending" ? "Sending..." : "Send Message"}

                <Send
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              {status !== "idle" && (
                <p
                  aria-live="polite"
                  className={`text-sm ${
                    status === "success"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : status === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

