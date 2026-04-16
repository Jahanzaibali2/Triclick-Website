import React, { memo } from "react";
import "../../Styles/Home.css";
import reviewImg from "../../assets/dummy.png";

const stats = [
  { value: "4.9", label: "Average Rating" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Retention Rate" },
];

const ReviewSection = () => {
  return (
    <section className="rs-section" id="reviews" aria-labelledby="rs-heading">
      <div className="rs-inner">
        <div className="rs-content">
          <span className="rs-eyebrow">Client Love</span>

          <h2 id="rs-heading" className="rs-heading">
            Why Businesses
            <span className="rs-heading-accent"> Trust Us</span>
          </h2>

          <p className="rs-body">
            Trusted by hundreds of businesses worldwide for creative design, branding,
            and high-converting digital experiences that actually deliver results.
          </p>

          <div className="rs-stats" role="list">
            {stats.map(({ value, label }) => (
              <div className="rs-stat" role="listitem" key={label}>
                <span className="rs-stat-value">{value}</span>
                <span className="rs-stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="rs-actions">
            <a
              href="#contact"
              className="rs-btn-primary"
              aria-label="Book a session via the contact section"
            >
              Book a Session
            </a>
            <a href="#work" className="rs-btn-ghost">
              See Our Work
            </a>
          </div>
        </div>

        <div className="rs-visual" aria-hidden="true">
          <div className="rs-img-wrap">
            <div className="rs-glow" />
            <img
              src={reviewImg}
              alt="Satisfied clients celebrating project success"
              loading="lazy"
              decoding="async"
              width={460}
              height={460}
              className="rs-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ReviewSection);
