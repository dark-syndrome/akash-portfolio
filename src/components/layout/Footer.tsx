import Link from "next/link";
import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer
      className="mt-auto py-10 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm" style={{ color: "var(--c-muted)" }}>
          © 2025{" "}
          <span style={{ color: "var(--c-primary)" }}>{siteConfig.name}</span>
        </span>
        <div className="flex gap-6">
          {[
            { href: siteConfig.github, label: "GitHub" },
            { href: siteConfig.linkedin, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, label: "Email" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--c-muted)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--c-text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--c-muted)")
              }
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
