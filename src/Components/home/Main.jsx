import React, { memo } from "react";
import "../../Styles/Home.css";
import img3 from "../../assets/img3.png";

const pillars = [
  { text: "Bold Ideas" },
  { text: "Sharp Strategy" },
  { text: "Real Results" },
];

const Main = () => {
  return (
    <section className="ab-section" id="about" aria-labelledby="ab-title">
      <div className="ab-inner">

        {/* ── IMAGE COLUMN ── */}
        <div className="ab-visual" aria-hidden="true">
          <div className="ab-img-frame">
            <div className="ab-img-backdrop" />
            <img
              data-aos="zoom-in-right"
              data-aos-delay="300"
              className="ab-img"
              src={img3}
              alt="TrikClik creative team in action"
              loading="lazy"
              decoding="async"
              width={540}
              height={620}
            />
            {/* Corner accent tag */}
            <div className="ab-tag">
              <span className="ab-tag-dot" />
              Creative Agency
            </div>
          </div>
        </div>

        {/* ── TEXT COLUMN ── */}
        <article className="ab-content" data-aos="fade-left" data-aos-delay="200">

          <span className="ab-eyebrow">Who We Are</span>

          <h2 className="ab-heading" id="ab-title">
            Traditional
            <span className="ab-heading-invert"> Is Not <br /> Our Thing.</span>
          </h2>

          <p className="ab-body">
            At TrikClik, we don&apos;t follow trends — we create them. We craft
            scroll-stopping content, ideas that click, and strategies built for
            the audience of today. You focus on what you do best.
            We&apos;ll handle the rest.
          </p>

          {/* Pillar chips */}
          <div className="ab-pillars" role="list">
            {pillars.map(({ icon, text }) => (
              <div className="ab-pillar" role="listitem" key={text}>
                <span className="ab-pillar-icon">{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="ab-actions">
            <a href="#contact" className="ab-btn-primary" aria-label="Get in touch with TrikClik">
              Work With Us
            </a>
            <a href="#work" className="ab-btn-ghost">
              Our Work ↗
            </a>
          </div>

        </article>
      </div>
    </section>
  );
};

export default memo(Main);