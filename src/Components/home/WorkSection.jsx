import React, { useState, useEffect, useCallback, memo } from "react";
import "../../Styles/Home.css";
import img  from "../../assets/ph5.png";
import img1 from "../../assets/Latte.png";
import img2 from "../../assets/Lazy6.png";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  { id: 1, image: img,  title: "PH5 Coffee Shop",       category: "Branding" },
  { id: 2, image: img1, title: "Latte Coffees Campaign", category: "Campaign" },
  { id: 3, image: img2, title: "Lazy6 Clothing",         category: "Fashion"  },
];
const TOTAL    = SLIDES.length;
const INTERVAL = 2000;

/* ── Dots ───────────────────────────────────────────────────── */
const Dots = memo(({ current, onSelect }) => (
  <div className="wk-dots" role="tablist" aria-label="Select slide">
    {SLIDES.map((s, i) => (
      <button
      key={s.id}
      type="button"
      role="tab"
      aria-selected={i === current}
      aria-label={s.title}
      className={`wk-dot${i === current ? " active" : ""}`}
      onClick={() => onSelect(i)}
      />
    ))}
  </div>
));

/* ── Arrow — rendered but hidden on mobile via CSS ──────────── */
const NavBtn = memo(({ dir, onClick }) => (
  <button
  type="button"
  className={`wk-nav wk-nav--${dir}`}
  onClick={onClick}
  aria-label={dir === "prev" ? "Previous project" : "Next project"}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {dir === "prev"
        ? <path d="M12 3L6 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        : <path d="M6 3l6 6-6 6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      }
    </svg>
  </button>
));

/* ── Main ───────────────────────────────────────────────────── */
const WorkSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [loaded,  setLoaded]  = useState(new Set([0]));
  const [paused,  setPaused]  = useState(false);

  /* Preload next image */
  useEffect(() => {
    const next = (current + 1) % TOTAL;
    if (!loaded.has(next)) {
      const pre = new window.Image();
      pre.src = SLIDES[next].image;
      pre.onload = () => setLoaded(p => new Set([...p, next]));
    }
  }, [current, loaded]);

  /* Auto-advance (desktop pauses on hover; mobile never pauses) */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent(p => (p + 1) % TOTAL), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const goNext = useCallback(() => setCurrent(p => (p + 1) % TOTAL), []);
  const goPrev = useCallback(() => setCurrent(p => (p - 1 + TOTAL) % TOTAL), []);
  const gotoall = () => {
    navigate("./AllProjects");
      }
  return (
    <section id="work" className="wk-section" aria-labelledby="wk-heading">
      <div className="wk-inner">

        {/* ── Copy ── */}
        <div className="wk-copy">
          <p className="wk-eyebrow">Our Portfolio</p>

          <h2 className="wk-heading" id="wk-heading">
            Just some<br />
            of our <span className="wk-heading__em">work.</span>
          </h2>

          <p className="wk-desc">
            Bold ideas and scroll-stopping stories. From national campaigns and
            digital launches to immersive brand experiences — our portfolio shows
            how we turn brands into things people remember.
          </p>
          <p className="wk-desc">
            Strategy, design, and production working in lockstep to create work
            that actually performs.
          </p>

          <button type="button" onClick={gotoall} className="wk-btn" aria-label="View all projects">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p className="wk-counter" aria-live="polite" aria-atomic="true">
            <span className="wk-counter__cur">{String(current + 1).padStart(2, "0")}</span>
            <span className="wk-counter__sep"> / </span>
            <span className="wk-counter__tot">{String(TOTAL).padStart(2, "0")}</span>
          </p>
        </div>

        {/* ── Slider ── */}
        <div
          className="wk-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Portfolio carousel"
        >
          {/* Progress bar */}
          <div className="wk-progress" aria-hidden="true">
            <div
              key={current}
              className="wk-progress__bar"
              style={{ animationDuration: paused ? "0s" : `${INTERVAL}ms` }}
            />
          </div>

          {/* Slides */}
          <div className="wk-window">
            {SLIDES.map((slide, i) => (
              <article
                key={slide.id}
                className={`wk-slide${i === current ? " active" : ""}`}
                aria-hidden={i !== current}
              >
                {loaded.has(i) ? (
                  <img
                    src={slide.image}
                    alt={`${slide.title} project`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ) : (
                  <div className="wk-skeleton" role="status">
                    <span className="sr-only">Loading…</span>
                  </div>
                )}

                <div className="wk-caption">
                  <span className="wk-caption__cat">{slide.category}</span>
                  <span className="wk-caption__title">{slide.title}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows — display:none on mobile */}
          <NavBtn dir="prev" onClick={goPrev} />
          <NavBtn dir="next" onClick={goNext} />

          {/* Dots — always visible */}
          <Dots current={current} onSelect={setCurrent} />
        </div>

      </div>
    </section>
  );
};

export default memo(WorkSection);