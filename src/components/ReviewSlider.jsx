import React, { useState } from "react";
import "../styles/ReviewSlider.css";

function ReviewSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      username: "Username 1",
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet pellentesque elit, a laoreet dolor volutpat sit amet.",
      profilePic: "https://cdn-icons-png.freepik.com/512/3686/3686930.png",
    },
    {
      username: "Username 2",
      stars: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet pellentesque elit, a laoreet dolor volutpat sit amet.",
      profilePic: "https://cdn-icons-png.freepik.com/512/3686/3686930.png",
    },
    {
      username: "Username 3",
      stars: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet pellentesque elit, a laoreet dolor volutpat sit amet.",
      profilePic: "https://cdn-icons-png.freepik.com/512/3686/3686930.png",
    },
  ];

  const totalSlides = reviews.length;

  const goToSlide = (n) => {
    const newSlide = (n + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  return (
    <>
      <div className="review-slider-main-container">
        <div className="review-slider">
          <button className="prev" onClick={() => goToSlide(currentSlide - 1)}>
            &#10094;
          </button>

          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review-container ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="review-header">
                <div className="profile">
                  <img
                    src={review.profilePic}
                    className="profile-pic-review"
                    alt="Profile Pic"
                  />
                  <span className="profile-username">
                    <a href="#">.{review.username}</a>
                  </span>
                </div>
                <div className="review-stars">
                  {Array.from({ length: review.stars }).map((_, starIndex) => (
                    <i key={starIndex} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="review-body">
                <p className="review-content">{review.content}</p>
                <a href="#" className="review-replies">
                  Ver respuestas
                </a>
              </div>
            </div>
          ))}

          <button className="next" onClick={() => goToSlide(currentSlide + 1)}>
            &#10095;
          </button>
        </div>
        <a href="#" className="all-reviews-btn">
          {" "}
          Ver todas las reviews
        </a>
      </div>
    </>
  );
}

export default ReviewSlider;
