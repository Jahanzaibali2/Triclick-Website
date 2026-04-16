import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/AllPorjects.css";
import ContactUs from "./ContactUs";
// ── Your existing 3 portfolio previews (replace with your actual imports) ──
import lazy6 from "../../assets/Lazy6.png";
import ph5 from "../../assets/ph5.png";
import latte from "../../assets/Latte.png";
import gtex from "../../assets/Gtex.jpg";
import ozzo from "../../assets/ozzo.jpg";
import travles from "../../assets/travels.jpg";
import cucrina from "../../assets/cucrina.jpg";
import funhill from "../../assets/funhill.jpg";
import meji from "../../assets/meji.jpg";
import optical from "../../assets/optical.jpg";
import south from "../../assets/south.jpg";

// Instagram SVG icon
const InstaIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

// Arrow icon
const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

// ── Data ──
const FEATURED = [
  {
    id: "f1",
    title: "Ozzo Car Rental",
    category: "Automotive / Rental",
    description:
      "Full social media presence & brand identity for a premium car rental service.",
    logo: ozzo,
    insta: "https://www.instagram.com/ozzocarrental",
    tags: ["Branding", "Social Media", "Content"],
    accent: "#C9A84C",
    preview: ozzo,
  },
  {
    id: "f2",
    title: "Cucina Mista",
    category: "Food & Beverage",
    description:
      "Appetite-driven content strategy and visual branding for an upscale Italian kitchen.",
    logo: cucrina,
    insta: "https://www.instagram.com/cucinamista1",
    tags: ["Food Content", "Reels", "Photography"],
    accent: "#E8432D",
    preview: cucrina,
  },
  {
    id: "f3",
    title: "Meji Bread Pakistan",
    category: "Bakery & FMCG",
    description:
      "Scroll-stopping content and community growth for a beloved local bakery brand.",
    logo: meji,
    insta: "https://www.instagram.com/mejibreadpakistan",
    tags: ["Brand Growth", "Content Strategy", "Reels"],
    accent: "#F5A623",
    preview: meji,
  },

  {
    id: "f4",
    title: "South Side Nutrition",
    category: "Health & Wellness",
    description:
      "High-energy fitness brand content, supplement drops, and community engagement.",
    logo: south,
    insta: "https://www.instagram.com/south_side_nutrition.pk",
    tags: ["Fitness", "Product Drops", "Reels"],
    accent: "#22C55E",
    preview: south,
  },
  {
    id: "f5",
    title: "Fun City Hill Park",
    category: "Entertainment / Leisure",
    description:
      "Vibrant family-focused social media campaigns driving footfall and brand excitement.",
    logo: funhill,
    insta: "https://www.instagram.com/funcity_hill_park",
    tags: ["Events", "Family", "Campaign"],
    accent: "#FF2EDB",
    preview: funhill,
  },
  {
    id: "f6",
    title: "Friends Optical",
    category: "Retail / Eyewear",
    description:
      "Polished product visuals and brand storytelling for a trusted optical retailer.",
    logo: optical,
    insta: "https://www.instagram.com/friendsopticalofficial",
    tags: ["Retail", "Lifestyle", "Branding"],
    accent: "#3B82F6",
    preview: optical,
  },
  {
    id: "f7",
    title: "GTex Global",
    category: "Textile / Export",
    description:
      "Corporate digital identity and LinkedIn-led B2B content for a global textile exporter.",
    logo: gtex,
    insta: "https://www.instagram.com/gtexglobalofficial",
    tags: ["B2B", "Corporate", "Textile"],
    accent: "#8B5CF6",
    preview: gtex,
  },
  {
    id: "f8",
    title: "Latte",
    category: "Food & Beverage / Coffee",
    description:
      "Artisanal coffee crafted with precision — from perfectly steamed milk to rich, balanced espresso blends",
    logo: latte,
    insta: "https://www.instagram.com/latte.khi/",
    tags: ["Coffee Culture", "Barista Life", "Cafe Vibes"],
    accent: "#5cb6f6",
    preview: latte,
  },
  {
    id: "f9",
    title: "Ph5 Coffee",
    category: "Food & Beverage / Coffee",
    description:
      "Artisanal coffee crafted with precision — from perfectly steamed milk to rich, balanced espresso blends",
    logo: ph5,
    insta: "https://www.instagram.com/ph5_coffeeshop/",
    tags: ["Cafe Culture", "Barista Life", "Coffee Shop"],
    accent: "#2e6731",
    preview: ph5,
  },
  {
    id: "f10",
    title: "Lazy 6 Clothing",
    category: "Fashion / Apparel",
    description:
      "Modern fashion branding and social media strategy focused on stylish apparel, seasonal drops, and audience engagement.",
    logo: lazy6,
    insta: "https://www.instagram.com/_lazy_6_/",
    tags: ["Fashion", "Clothing", "Branding"],
    accent: "#5cf6f4",
    preview: lazy6,
  },
  {
  id: "f11",
  title: "WanderLuxe Travels",
  category: "Travel & Tourism / Luxury",
  description: "Captivating destination content and brand storytelling for a premium travel experience company.",
  logo: travles, // import your image
  insta: "https://www.instagram.com/musafiraanatravels?igsh=YzIyazU0M2Uyb2xhs",
  tags: ["Travel & Tourism", "Wanderlust", "Destination Marketing", "Adventure Travel", "Luxury Getaways"],
  accent: "#06B6D4",
  preview: travles, // import your image
}
];

// const CLIENTS = [
//   {
//     id: "c4",
//     title: "South Side Nutrition",
//     category: "Health & Wellness",
//     description: "High-energy fitness brand content, supplement drops, and community engagement.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.82787-19/637124655_18113017045651237_2722365646585636783_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFqAkn0rz4dIxhoal1sjDdmV7jcYWtsrmF5EDK7b0Akmz9P7bpNiI38_UCWkAos__mCQdKAJtdUiOU_ZhdG0uCx&_nc_ohc=XjawzQhWZgoQ7kNvwGhCGHA&_nc_gid=dUaB1UWy3jsmV6BagEFYjQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af33wfil1kdJzQELMmQaurWQ84rZtQZkN69TX5QxFRtCog&oe=69E69F74&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/south_side_nutrition.pk",
//     tags: ["Fitness", "Product Drops", "Reels"],
//     accent: "#22C55E",
//   },
//   {
//     id: "c5",
//     title: "Fun City Hill Park",
//     category: "Entertainment / Leisure",
//     description: "Vibrant family-focused social media campaigns driving footfall and brand excitement.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.2885-19/470911085_1359425908774653_399702927238549846_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2gFj4n4Pgj1nE-GbcsNnx6wVwgzu53qBr2VNjTQyxqPH1zRa3hulAAoCuUIt-EZmChK4Ccvg3pUGvVMV4y7IwtJiy9&_nc_ohc=M1fsNaUPyPkQ7kNvwHCpdd3&_nc_gid=zb5EfTqGFqjDgdVC42JL0w&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af3mEqsHQzmjiQhODvjt9mWW_h6K9IULOSGpI5PCUJHeoQ&oe=69E6A5D9&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/funcity_hill_park",
//     tags: ["Events", "Family", "Campaign"],
//     accent: "#FF2EDB",
//   },
//   {
//     id: "c6",
//     title: "Friends Optical",
//     category: "Retail / Eyewear",
//     description: "Polished product visuals and brand storytelling for a trusted optical retailer.",
//     logo: "https://instagram.fkhi11-1.fna.fbcdn.net/v/t51.82787-19/531844354_18075390968494367_2209139905774704179_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gEbvAV32DOoSijRiK75nuaCmRI4jhcrmmreoLfYmN8a6QMmBweI0M-8HhHZk92rBUgt6U6kvCepMOKLmFXD8yBH&_nc_ohc=ukgxnLUZ68MQ7kNvwHsTZVd&_nc_gid=J59SpPf0TivjT8RC0AKiQw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af3yOj9UoMbUqN_H3MBKmAmKy4Dj00WHDvCutKBNQo1vwQ&oe=69E68D68&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/friendsopticalofficial",
//     tags: ["Retail", "Lifestyle", "Branding"],
//     accent: "#3B82F6",
//   },
//   {
//     id: "c7",
//     title: "GTex Global",
//     category: "Textile / Export",
//     description: "Corporate digital identity and LinkedIn-led B2B content for a global textile exporter.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.82787-19/671044167_18103999487483876_7892527528764860084_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFSzz9rkZRailtd3J0Nja4hpW22uj-xStw_XM9g88xO_U7t6yXdNFDcCL2MEJWCx2S6zGkvUO-VB_kHZbNeKXLq&_nc_ohc=uEcaxXxF0c4Q7kNvwHgKpH3&_nc_gid=kih0ImbpqvEzOJL3LlpmcA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af0CW1P4MEPKqDEu-sYLSH3RV0vSx2aIWaCayAY-gEMrDA&oe=69E6BA16&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/gtexglobalofficial",
//     tags: ["B2B", "Corporate", "Textile"],
//     accent: "#8B5CF6",
//   },
// ];

// ── Featured Card (with preview image) ──
const FeaturedCard = ({ project, index }) => (
  <article
    className="ap-feat-card"
    style={{ "--accent": project.accent, animationDelay: `${index * 0.1}s` }}
  >
    <div className="ap-feat-preview">
      <img
        src={project.preview}
        alt={`${project.title} work preview`}
        loading="lazy"
        decoding="async"
      />
      <div className="ap-feat-overlay" />
    </div>

    <div className="ap-feat-body">
      <div className="ap-feat-header">
        <a
          href={project.insta}
          target="_blank"
          rel="noopener noreferrer"
          className="ap-insta-btn"
          aria-label={`Visit ${project.title} on Instagram`}
        >
          <InstaIcon />
          <span>Follow</span>
        </a>
      </div>

      <span className="ap-category">{project.category}</span>
      <h3 className="ap-feat-title">{project.title}</h3>
      <p className="ap-feat-desc">{project.description}</p>

      <div className="ap-tags">
        {project.tags.map((t) => (
          <span className="ap-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="ap-feat-accent-bar" />
  </article>
);

// ── Client Card (logo-focused, no preview) ──
const ClientCard = ({ client, index }) => (
  <article
    className="ap-client-card"
    style={{
      "--accent": client.accent,
      animationDelay: `${0.3 + index * 0.08}s`,
    }}
  >
    <div className="ap-client-top">
      <div className="ap-client-logo-wrap">
        <img
          src={client.logo}
          alt={`${client.title} logo`}
          className="ap-client-logo"
          loading="lazy"
        />
      </div>
      <a
        href={client.insta}
        target="_blank"
        rel="noopener noreferrer"
        className="ap-client-insta"
        aria-label={`Visit ${client.title} on Instagram`}
      >
        <InstaIcon />
      </a>
    </div>

    <div className="ap-client-body">
      <span className="ap-category">{client.category}</span>
      <h3 className="ap-client-title">{client.title}</h3>
      <p className="ap-client-desc">{client.description}</p>

      <div className="ap-tags">
        {client.tags.map((t) => (
          <span className="ap-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="ap-client-arrow">
      <ArrowIcon />
    </div>
  </article>
);

// ── Page ──
const AllProjects = () => {
  return (
    <main className="ap-page">
      {/* Hero header */}
      <header className="ap-hero">
        <div className="ap-hero-inner">
          <Link to="/" className="ap-back">
            ← Back to Home
          </Link>
          <span className="ap-eyebrow">Our Work</span>
          <h1 className="ap-hero-title">
            Brands We've
            <span className="ap-hero-accent"> Grown.</span>
          </h1>
          <p className="ap-hero-sub">
            From food to fashion, automotive to entertainment — every brand got
            a strategy built to convert and a voice built to last.
          </p>
          <div className="ap-hero-stat-row">
            {[
              ["7+", "Active Clients"],
              ["500K+", "Impressions Driven"],
              ["98%", "Client Retention"],
            ].map(([val, lbl]) => (
              <div className="ap-hero-stat" key={lbl}>
                <span className="ap-hero-stat-val">{val}</span>
                <span className="ap-hero-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ap-hero-glow" aria-hidden="true" />
      </header>

      {/* Featured: 3 original projects with previews */}
      <section className="ap-section" aria-labelledby="ap-featured-label">
        <div className="ap-section-inner">
          <div className="ap-section-header">
            <span className="ap-section-eyebrow">Featured Projects</span>
            <h2 id="ap-featured-label" className="ap-section-title">
              Flagship Work
            </h2>
          </div>
          <div className="ap-feat-grid">
            {FEATURED.map((p, i) => (
              <FeaturedCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="ap-cta" aria-labelledby="ap-cta-label">
        <div className="ap-cta-inner">
          <span className="ap-eyebrow">Ready?</span>
          <h2 id="ap-cta-label" className="ap-cta-title">
            Let's Build Something
            <span className="ap-cta-accent"> Unforgettable.</span>
          </h2>
          <p className="ap-cta-body">
            Your brand deserves more than good-enough. Tell us what you're
            building — we'll tell you how to make it impossible to ignore.
          </p>
          <Link to="/#contact" element={<ContactUs />} className="ap-cta-btn">
            Let's Talk Business
            <span className="ap-cta-btn-arrow">→</span>
          </Link>
        </div>
        <div className="ap-cta-glow" aria-hidden="true" />
      </section>
    </main>
  );
};

export default memo(AllProjects);
