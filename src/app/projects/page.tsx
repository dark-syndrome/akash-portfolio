"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/RevealText";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/content";

type Filter = "All" | "Robotics" | "AI/ML" | "Control Systems";

const filters: Filter[] = ["All", "Robotics", "AI/ML", "Control Systems"];

const categoryColor: Record<string, string> = {
  Robotics: "var(--c-primary)",
  "AI/ML": "var(--c-secondary)",
  "Control Systems": "var(--c-accent)",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <main>
      {/* ── Header ───────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="aurora-bg">
          <div
            className="aurora-blob"
            style={{
              width: "55vw",
              height: "55vw",
              background:
                "radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)",
              top: "-20%",
              left: "-15%",
              animation: "aurora 14s ease-in-out infinite",
            }}
          />
          <div className="grid-pattern" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <p className="section-label">// portfolio</p>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: "var(--c-text)" }}
            >
              Projects
            </h1>
            <p
              className="text-lg mt-4 max-w-xl"
              style={{ color: "var(--c-muted)" }}
            >
              A collection of robotics, AI, and control systems work — built in
              the lab and in the wild.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Filter ───────────────────────────────────── */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-5 py-2 rounded-full text-sm font-medium font-mono transition-all duration-200"
                style={
                  active === f
                    ? {
                        backgroundColor: "var(--c-primary)",
                        color: "#05050a",
                      }
                    : {
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--c-muted)",
                        background: "transparent",
                      }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────── */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="glass rounded-2xl p-6 h-full flex flex-col cursor-pointer group">
                    <div
                      className="w-full h-40 rounded-xl mb-5 flex items-center justify-center"
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
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
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
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div
              className="text-center py-24 font-mono text-sm"
              style={{ color: "var(--c-muted)" }}
            >
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
