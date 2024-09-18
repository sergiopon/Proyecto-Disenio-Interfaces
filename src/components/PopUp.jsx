import React from "react";
import { useState, useEffect } from "react";
import "../styles/PopUp.css";

const PopUp = ({ imageSrc, title, content, onClose }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("popup-container")) {
        handleClose();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={`popup-container ${closing ? "popup-exit" : ""}`}>
      <div className="popup-content">
        <img src={imageSrc} alt="PopUp" className="popup-image" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-text">{content}</p>
        <button onClick={handleClose}>
          {" "}
          <i className="fas fa-close"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default PopUp;