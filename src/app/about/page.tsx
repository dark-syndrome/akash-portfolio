"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/RevealText";
import { Footer } from "@/components/layout/Footer";
import { skills, timeline, siteConfig } from "@/data/content";

const grouped = skills.reduce<Record<string, typeof skills>>(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {}
);

export default function About() {
  return (
    <main>
      {/* ── Page Header ──────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="aurora-bg">
          <div
            className="aurora-blob"
            style={{
              width: "50vw",
              height: "50vw",
              background:
                "radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",
              top: "-10%",
              right: "-10%",
              animation: "aurora 15s ease-in-out infinite",
            }}
          />
          <div className="grid-pattern" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <p className="section-label">// about me</p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "var(--c-text)" }}
            >
              Building at the{" "}
              <span className="gradient-text">edge of robotics</span>
              <br />
              and intelligence.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Bio ───────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal direction="left">
            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(232,232,240,0.8)" }}
              >
                I&apos;m <strong style={{ color: "var(--c-primary)" }}>Akash Deshapathi</strong>,
                a robotics and AI engineer focused on building systems that
                work in the real world — not just in simulation.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--c-muted)" }}
              >
                My work spans autonomous navigation, deep learning for
                perception and control, and classical control theory applied to
                modern robotic platforms. I work primarily with ROS2, PyTorch,
                MATLAB, and C++.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--c-muted)" }}
              >
                I&apos;m currently available for freelance projects and
                research collaborations. If you&apos;re building something at
                the intersection of robotics and AI, let&apos;s talk.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1px solid rgba(0,212,255,0.25)",
                    color: "var(--c-primary)",
                  }}
                >
                  GitHub →
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "var(--c-text)",
                  }}
                >
                  Email me
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div
              className="w-full aspect-square max-w-sm mx-auto rounded-3xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(123,47,255,0.06) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--c-primary) 0%, var(--c-secondary) 100%)",
                    color: "#05050a",
                  }}
                >
                  AD
                </div>
                <p
                  className="font-mono text-xs"
                  style={{ color: "var(--c-muted)" }}
                >
                  [ profile photo coming soon ]
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <p className="section-label">// capabilities</p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--c-text)" }}
            >
              Skills & Tools
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(grouped).map(([category, categorySkills], ci) => (
              <Reveal key={category} delay={ci * 0.08}>
                <div>
                  <p
                    className="font-mono text-xs tracking-widest uppercase mb-5"
                    style={{ color: "var(--c-secondary)" }}
                  >
                    {category}
                  </p>
                  <div className="space-y-4">
                    {categorySkills.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                          <span
                            className="text-sm"
                            style={{ color: "var(--c-text)" }}
                          >
                            {skill.name}
                          </span>
                          <span
                            className="font-mono text-xs"
                            style={{ color: "var(--c-muted)" }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-track">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, var(--c-primary), var(--c-secondary))",
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: si * 0.06,
                              ease: [0.25, 1, 0.25, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-14">
            <p className="section-label">// journey</p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--c-text)" }}
            >
              Timeline
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, var(--c-primary) 0%, rgba(0,212,255,0) 100%)",
              }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-4 h-4 rounded-full shrink-0 mt-1"
                        style={{
                          backgroundColor: "var(--c-primary)",
                          boxShadow: "0 0 10px rgba(0,212,255,0.4)",
                        }}
                      />
                    </div>
                    <div className="pb-2">
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--c-primary)" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="font-semibold text-lg mt-1"
                        style={{ color: "var(--c-text)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm mb-2"
                        style={{ color: "var(--c-secondary)" }}
                      >
                        {item.org}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--c-muted)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
