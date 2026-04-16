import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Components/home/home";
import NavBar from "./Components/home/NavBar";
import Footer from "./Components/home/Footer";
import AllProjects from "./Components/home/AllProjects";
import Loader from "./Components/home/Loader";
import CustomCursor from "./Components/home/CustomCursor";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // ⏱ 1.5 sec

    return () => clearTimeout(timer);
  }, [location]);

  // Show loader during navigation
  if (loading) {
    return (
      <>
        <Loader />
        <CustomCursor /> {/* ✅ cursor even during loading */}
      </>
    );
  }

  return (
    <>
      {/* ✅ Global Cursor */}
      <CustomCursor />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* All Projects */}
        <Route
          path="/AllProjects"
          element={
            <Layout>
              <AllProjects />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;