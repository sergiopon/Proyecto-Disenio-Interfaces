// UserList.js
import React from "react";
import "../styles/UsuariosRegistrados.css";

const UserList = () => {
  return (
    <div className="registered-div">
      <h4>Usuarios Inscritos</h4>
      <div className="input-container">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Buscar" />
      </div>
      <div className="users-wrapper">
        <div className="profile-registered">
          <img
            src="https://s1.elespanol.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg"
            className="registered-profile-pic"
            alt="Isabella"
          />
          <span>Isabella</span>
        </div>

        <div className="profile-registered">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s"
            className="registered-profile-pic"
            alt="Esteban"
          />
          <span>Esteban</span>
        </div>

        <div className="profile-registered">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQez9LIK4vw1zAUR2-q_jH3Ex09dXihaiEJQ&s"
            className="registered-profile-pic"
            alt="Cancha"
          />
          <span>Cancha</span>
        </div>

        <div className="profile-registered">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNF9waG90b19vZl9hZnJpY2FuLWFtZXJpY2FuX3dvbWFuX2NvbXBhbnlfd29ya19kNmM4MmJhNS1iYjA2LTRkN2EtYjJlMy1hNDZhNDYyMjA0ZmZfMS5qcGc.jpg"
            className="registered-profile-pic"
            alt="Ana"
          />
          <span>Ana</span>
        </div>

        <div className="profile-registered">
          <img
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
            className="registered-profile-pic"
            alt="Sergio"
          />
          <span>Sergio</span>
        </div>
      </div>
    </div>
  );
};

export default UserList;
