import React from "react";
import '../style/HomeStyle.css'
import Login from "../components/Login";
import List from "../components/Emotions/List";


const Home = () => (
  <div className="initContainer">
    <h1>Holi! este es el home</h1>
    <hr />
    <Login />
    <List />

  </div>
);

export default Home;