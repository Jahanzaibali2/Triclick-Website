import React, { memo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../Styles/Home.css";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Smooth scroll handler
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home first

      // wait for DOM to render then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg triklik-navbar">
      <div className="container">

        {/* ✅ Logo → route without reload */}
        <Link className="navbar-brand triklik-logo" to="/">
          <span className="logo-mark">
            <img src={logo} alt="TrikClik logo" width={30} height={30} />
          </span>
          <span className="logo-text">TRIKCLIK</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-lg-4">

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("home")}>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("about")}>
                Meet The Squad
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("services")}>
                Services
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("work")}>
                Portfolio
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("reviews")}>
                Reviews
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("contact")}>
                Contact Us
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);