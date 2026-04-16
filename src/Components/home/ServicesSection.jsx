import React, { memo } from "react";
import "../../Styles/Home.css";

import image from "../../assets/Digital.png";
import image1 from "../../assets/Web.png";
import image2 from "../../assets/Video.png";

const services = [
  {
    id: 1,
    eyebrow: "01",
    title: "Graphic Designing",
    desc: "We combine art and technology to craft visual identities that resonate, from brand systems and print to digital layouts that leave a lasting impression.",
    img: image,
    tag: "Branding & Print",
  },
  {
    id: 2,
    eyebrow: "02",
    title: "Web & App Development",
    desc: "High-performance websites and mobile apps built with clean UI, scalable architecture, and a relentless focus on user experience across every device.",
    img: image1,
    tag: "Digital Products",
  },
  {
    id: 3,
    eyebrow: "03",
    title: "Videography",
    desc: "Cinematic video production crafted with precision, from concept to final cut, elevating your brand's story through compelling visuals and sound.",
    img: image2,
    tag: "Film & Motion",
  },
];

const ServiceCard = memo(({ eyebrow, title, desc, img, tag }) => (
  <article className="svc-card">
    <div className="svc-card__inner">
      <div className="svc-card__header">
        <span className="svc-card__num">{eyebrow}</span>
        <span className="svc-card__tag">{tag}</span>
      </div>

      <div className="svc-card__img-wrap">
        <img
          src={img}
          alt={`${title} illustration`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="svc-card__body">
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{desc}</p>
      </div>
    </div>
  </article>
));

const ServicesSection = () => (
  <section id="services" className="svc-section" aria-labelledby="svc-heading">
    <div className="svc-container">
      <header className="svc-header">
        <p className="svc-eyebrow">Services Section</p>
        <h2 className="svc-heading" id="svc-heading">
          Our Services <span className="svc-heading__accent">to the Table</span>
        </h2>
        <p className="svc-subline">
          A focused set of creative and technical disciplines delivered with craft,
          clarity, and purpose.
        </p>
      </header>

      <div className="svc-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default memo(ServicesSection);
