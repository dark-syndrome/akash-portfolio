"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/RevealText";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/content";

type FormState = "idle" | "sending" | "success";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: replace with your actual form handler (e.g. Resend, Formspree)
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "var(--c-text)",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <main>
      {/* ── Header ───────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="aurora-bg">
          <div
            className="aurora-blob"
            style={{
              width: "50vw",
              height: "50vw",
              background:
                "radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)",
              bottom: "-10%",
              right: "-10%",
              animation: "aurora 12s ease-in-out infinite",
            }}
          />
          <div className="grid-pattern" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <p className="section-label">// contact</p>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: "var(--c-text)" }}
            >
              Let&apos;s Talk
            </h1>
            <p
              className="text-lg mt-4 max-w-lg"
              style={{ color: "var(--c-muted)" }}
            >
              Have a project, an idea, or a question? I&apos;m always open to
              new conversations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────── */}
      <section className="py-12 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Form */}
          <Reveal>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center py-16"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6"
                    style={{
                      background: "rgba(0,255,136,0.1)",
                      border: "1px solid rgba(0,255,136,0.3)",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--c-text)" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--c-muted)" }}>
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-mono mb-2"
                        style={{ color: "var(--c-muted)" }}
                      >
                        NAME
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Akash Deshapathi"
                        required
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(0,212,255,0.4)")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.08)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-mono mb-2"
                        style={{ color: "var(--c-muted)" }}
                      >
                        EMAIL
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(0,212,255,0.4)")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.08)")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--c-muted)" }}
                    >
                      PROJECT TYPE
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "rgba(0,212,255,0.4)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.08)")
                      }
                    >
                      <option value="" style={{ background: "#0d0d18" }}>
                        Select a type...
                      </option>
                      <option
                        value="robotics"
                        style={{ background: "#0d0d18" }}
                      >
                        Robotics Engineering
                      </option>
                      <option value="ai-ml" style={{ background: "#0d0d18" }}>
                        AI / ML Development
                      </option>
                      <option
                        value="control"
                        style={{ background: "#0d0d18" }}
                      >
                        Control Systems
                      </option>
                      <option
                        value="consulting"
                        style={{ background: "#0d0d18" }}
                      >
                        Consulting / Review
                      </option>
                      <option value="other" style={{ background: "#0d0d18" }}>
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--c-muted)" }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "rgba(0,212,255,0.4)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.08)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded-full font-semibold text-sm transition-all duration-200"
                    style={{
                      backgroundColor: "var(--c-primary)",
                      color: "#05050a",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Info panel */}
          <Reveal direction="right" delay={0.1}>
            <div className="space-y-10 pt-4">
              <div>
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--c-primary)" }}
                >
                  // direct contact
                </p>
                <div className="space-y-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm transition-colors"
                    style={{ color: "var(--c-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--c-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--c-muted)")
                    }
                  >
                    <span style={{ color: "var(--c-primary)" }}>✉</span>
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors"
                    style={{ color: "var(--c-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--c-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--c-muted)")
                    }
                  >
                    <span style={{ color: "var(--c-primary)" }}>⌘</span>
                    github.com/dark-syndrome
                  </a>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.12)",
                }}
              >
                <div
                  className="flex items-center gap-2 mb-3"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "var(--c-accent)",
                      animation: "pulse-dot 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--c-accent)" }}
                  >
                    CURRENTLY AVAILABLE
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--c-muted)" }}
                >
                  I&apos;m open to new freelance projects. Typical response
                  time is within 24–48 hours.
                </p>
              </div>

              <div>
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--c-secondary)" }}
                >
                  // what to include
                </p>
                <ul className="space-y-2">
                  {[
                    "Brief project description",
                    "Your timeline and budget range",
                    "Technical stack or constraints",
                    "Any reference materials",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm flex items-center gap-2"
                      style={{ color: "var(--c-muted)" }}
                    >
                      <span style={{ color: "var(--c-accent)" }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
