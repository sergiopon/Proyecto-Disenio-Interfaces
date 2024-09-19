import React from 'react';
import '../styles/Comentario.css';

const Commentaries = () => {
  return (
    <div className="commentaries-main-container">
      <div className="current-comment-ctn">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="comment user profile"
          className="comment-user-profile-pic"
        />
        <div className="comment-body">
          <div className="comment-content">
            <a href="#" className="comment-user-username">Manuel</a>
            <p className="comment-content-text">
              Me gustaría participar en el plan con un amigo que usa muletas, ¿El lugar es apto para personas con dificultades de movilidad?
            </p>
          </div>
          <div className="comment-meta">
            <a href="#" className="comment-reply-btn">Responder</a>
            <span>hace 30 minutos</span>
          </div>
          <a href="#" className="show-more-replies">mostrar más respuestas</a>
        </div>
      </div>

      <div className="other-comments">
        <div className="secondary-reply">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg"
            alt="reply user profile"
            className="reply-user-profile-pic"
          />
          <span className="reply-user-username">Joshua</span>
          <p className="reply-user-content">Quiero llevar a mi abuela, ¿puedo?</p>
        </div>
        <div className="secondary-reply">
          <img
            src="https://png.pngtree.com/background/20230519/original/pngtree-young-woman-anime-cartoon-drawing-picture-image_2660945.jpg"
            alt="reply user profile"
            className="reply-user-profile-pic"
          />
          <span className="reply-user-username">Valentina</span>
          <p className="reply-user-content">
            Yo ya he visitado el lugar antes, es muy lindo y me encantaría volver pronto para pasar más tiempo allí disfrutando de la vista.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commentaries;
