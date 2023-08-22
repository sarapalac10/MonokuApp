import React from "react";
import '../style/HomeStyle.css'
import Login from "../components/Login";
import Tarjetas from "../components/Inicio/Tarjetas";

const Home = () => (
  <div className="initContainer">
    <div className="titulo-inicio">
      <img className='imagenInicio' src='https://res.cloudinary.com/dez9y1otk/image/upload/v1692334518/MonokuApp/sin-fondo-bg_naihy2.png' alt='fondo-Mood-Master' />
      <h2 className="sloganInicio">"Emociones bajo control, vida en plenitud"</h2>
    </div>
      <Tarjetas/>

      <p className="texto-login">Con Mood Master podrás trabajar en tu crecimiento emocional, al procesar tus sentimientos y tomar decisiones más conscientes.</p>
      <Login />


  </div>
);

export default Home;