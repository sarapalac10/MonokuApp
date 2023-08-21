import React from "react";
import '../style/HomeStyle.css'
import Login from "../components/Login";

const Home = () => (
  <div className="initContainer">
    <div>
      <img className='imagenInicio' src='https://res.cloudinary.com/dez9y1otk/image/upload/v1692334518/MonokuApp/sin-fondo-bg_naihy2.png' alt='fondo-Mood-Master' />
      <p className="sloganInicio">Emociones bajo control, vida en plenitud</p>
    </div>
    <hr />
    <Login />

  </div>
);

export default Home;