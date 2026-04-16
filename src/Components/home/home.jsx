import React, { useEffect, useState, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Loader from "./Loader";
import CustomCursor from "./CustomCursor";

// const AllProjects = lazy(() => import("./Components/home/AllProjects"));
const Main = lazy(() => import("./Main"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const WorkSection = lazy(() => import("./WorkSection"));
const ReviewSection = lazy(() => import("./ReviewSection"));
const ContactUs = lazy(() => import("./ContactUs"));
const Footer = lazy(() => import("./Footer"));

const home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
    });

    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header>
        <NavBar />
        <HeroSection />
      </header>

      <main id="main-content" aria-label="Main content">
        <Suspense fallback={<div style={{ minHeight: "200px" }} aria-hidden="true" />}>
          <Main />
          <ServicesSection />
          <WorkSection />
          <ReviewSection />
          <ContactUs />
        </Suspense>
      </main>

      <Suspense fallback={<div style={{ minHeight: "80px" }} aria-hidden="true" />}>
        <Footer />
      </Suspense>

      <CustomCursor />
    </>
  );
};

export default home;
