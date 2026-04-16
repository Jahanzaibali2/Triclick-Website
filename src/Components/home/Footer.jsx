import React, { memo } from "react";
import "../../Styles/Home.css";

const navLinks = [
  { href: "#home",     label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Portfolio" },
  { href: "#contact",  label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="ft-footer" role="contentinfo">
      {/* Top divider glow */}
      <div className="ft-glow-bar" aria-hidden="true" />

      <div className="ft-inner">

        {/* ── Brand column ── */}
        <div className="ft-brand">
          <span className="ft-logo">
            Trik<span className="ft-logo-accent">Clik</span>
          </span>
          <p className="ft-tagline">
            We don't follow trends.<br />We create them.
          </p>
        </div>

        {/* ── Nav column ── */}
        <nav className="ft-nav" aria-label="Footer navigation">
          <span className="ft-col-label">Navigate</span>
          <ul className="ft-nav-list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="ft-nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contact column ── */}
        <div className="ft-contact">
          <span className="ft-col-label">Say Hello</span>
          <a href="mailto:hello@trikclik.com" className="ft-email">
            hello@trikclik.com
          </a>
          <div className="ft-socials" role="list" aria-label="Social media links">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="ft-social-btn"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © {new Date().getFullYear()} TrikClik. All rights reserved.
        </p>
        <p className="ft-made">
          Crafted with <span className="ft-heart" aria-hidden="true">♥</span> for brands that dare.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);