import React from "react";
import "../styles/ProfilePopUp.css";

const ProfilePopup = ({ buttonText, buttonLink, onClose }) => {
  return (
    <div className="profile-popup-container">
      <div className="profile-ctn">
        {/* Botón de cerrar */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="featured-profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s"
            alt="Banner"
            className="banner-img"
          />
          <img
            src="https://pics.craiyon.com/2023-05-23/7130319ef5f04aed8eb8aaa6624b936e.webp"
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="data-profile">
          <a href="#" className="profile-username">
            Isabella Pacheco
          </a>
          <span className="number-parches">10 Parches creados</span>
          <div className="profile-btn">
            <a href={buttonLink} className="profile-action-btn">
              {buttonText}
            </a>
            <a href="#" className="profile-alt-btn">
              <i className="fa-regular fa-comment"></i>
            </a>
            <a href="#" className="profile-alt-btn">
              <i className="fa-regular fa-compass"></i> Cali
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
