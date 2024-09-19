import React, { useEffect } from 'react';
import '../styles/NotificacionPopUp.css';

const NotificacionPopUp = () => {

  useEffect(() => {
    const notifications = document.querySelectorAll('.notification-ctn');
    notifications.forEach(notification => {
      const firstSpan = notification.querySelector('.last-message span');
      const paragraph = notification.querySelector('.last-message p');
      if (firstSpan.textContent.trim() !== "" && (firstSpan.textContent.length + paragraph.textContent.length) > 11) {
        paragraph.textContent = paragraph.textContent.slice(0, 11) + '...';
      }
    });
  }, []); 

  return (
    <div className="notifications-popup-container">
      <h4>Notificaciones</h4>
      <div className="notification-wrapper">
        <div className="notification-ctn">
          <img className="parche-img" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg" alt="Subida a Cristo Rey" />
          <div className="notification-content">
            <a className="parche-title" href="#">Subida a Cristo Rey</a>
            <span className="last-message">
              <span>Joshua:</span>
              <p>Ya llegué :)</p>
            </span>
          </div>
          <div className="notification-meta">
            <span className="hour-last-message">11:47pm</span>
            <span className="notification-counter">5</span>
          </div>
        </div>

        <div className="notification-ctn">
          <img className="parche-img" src="https://images.saatchiart.com/saatchi/1428629/art/8575984/7639773-HSC00001-7.jpg" alt="Clases de acuarela" />
          <div className="notification-content">
            <a className="parche-title" href="#">Clases de acuarela</a>
            <span className="last-message">
              <span>Mónica:</span>
              <p>lorem ipsum dolor sit amet</p>
            </span>
          </div>
          <div className="notification-meta">
            <span className="hour-last-message">02:35pm</span>
            <span className="notification-counter">5</span>
          </div>
        </div>

        <div className="notification-ctn">
          <img className="parche-img" src="https://st4.depositphotos.com/3700043/22427/v/450/depositphotos_224275970-stock-illustration-cute-robot-character-chatbot-icon.jpg" alt="Tu Parche Bot" />
          <div className="notification-content">
            <a className="parche-title" href="#">Tu Parche Bot</a>
            <span className="last-message">
              <span></span>
              <p>Tienes una solicitud pendiente de <span className="mention">@Sergio</span></p>
            </span>
          </div>
          <div className="notification-meta">
            <span className="hour-last-message">11:47pm</span>
            <span className="notification-counter">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificacionPopUp;