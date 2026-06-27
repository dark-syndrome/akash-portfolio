"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/animations/RevealText";
import { Footer } from "@/components/layout/Footer";
import { projects, services } from "@/data/content";

const featured = projects.filter((p) => p.featured);

const categoryColor: Record<string, string> = {
  Robotics: "var(--c-primary)",
  "AI/ML": "var(--c-secondary)",
  "Control Systems": "var(--c-accent)",
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="aurora-bg">
          <div className="aurora-blob aurora-1" />
          <div className="aurora-blob aurora-2" />
          <div className="aurora-blob aurora-3" />
          <div className="grid-pattern" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-10"
            style={{
              border: "1px solid rgba(0,255,136,0.2)",
              background: "rgba(0,255,136,0.05)",
              color: "var(--c-accent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--c-accent)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            AVAILABLE FOR FREELANCE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-5"
          >
            <span className="gradient-text">Akash</span>
            <br />
            <span style={{ color: "var(--c-text)" }}>Deshapathi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="font-mono text-xs tracking-widest uppercase mb-7"
            style={{ color: "var(--c-muted)" }}
          >
            Robotics · AI Systems · Control Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(232,232,240,0.65)" }}
          >
            Building intelligent machines at the intersection of robotics, AI,
            and control systems — from autonomous navigation to deep learning
            pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "var(--c-primary)", color: "#05050a" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 28px rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              View Projects
            </Link>
            <Link
              href="/freelance"
              className="px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--c-text)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,212,255,0.35)";
                (e.currentTarget as HTMLElement).style.color = "var(--c-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "var(--c-text)";
              }}
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--c-muted)" }}
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Featured Projects ──────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="section-label">// selected work</p>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--c-text)" }}
                >
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-mono transition-colors duration-200"
                style={{ color: "var(--c-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--c-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--c-muted)")
                }
              >
                View all →
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full flex flex-col cursor-pointer">
                  <div
                    className="w-full h-44 rounded-xl mb-5 flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--c-muted)" }}
                    >
                      [ image placeholder ]
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="font-mono text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          color: categoryColor[project.category],
                          border: `1px solid ${categoryColor[project.category]}28`,
                          background: `${categoryColor[project.category]}0a`,
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--c-muted)" }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3
                      className="font-semibold text-base mb-1.5 leading-snug"
                      style={{ color: "var(--c-text)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4 flex-1"
                      style={{ color: "var(--c-muted)" }}
                    >
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            color: "var(--c-muted)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ───────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: "var(--c-secondary)" }}
            >
              // what i build
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--c-text)" }}
            >
              Areas of Expertise
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.12}>
                <div
                  className="p-7 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(13,13,24,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(123,47,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.05)";
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg font-bold text-lg mb-5"
                    style={{
                      color: "var(--c-secondary)",
                      background: "rgba(123,47,255,0.1)",
                    }}
                  >
                    {svc.icon}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "var(--c-text)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {svc.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--c-accent)" }}
            >
              // let&apos;s build
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "var(--c-text)" }}
            >
              Got a project in mind?
            </h2>
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "var(--c-muted)" }}
            >
              Whether it&apos;s a robotics system, an AI pipeline, or a control
              architecture — I&apos;d love to help you build it.
            </p>
            <Link
              href="/contact"
              className="inline-block px-9 py-4 rounded-full font-bold text-sm transition-transform duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--c-primary) 0%, var(--c-secondary) 50%, var(--c-accent) 100%)",
                color: "#05050a",
              }}
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
