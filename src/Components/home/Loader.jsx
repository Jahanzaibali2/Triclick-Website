import React from "react";
import "../../Styles/Home.css";

export default function Loader() {
  return (
    <div className="loader-wrapper" aria-busy="true" aria-live="polite">
      <div className="loader-circle">
        <p className="loader-text">Trikclik</p>
      </div>
    </div>
  );
}
