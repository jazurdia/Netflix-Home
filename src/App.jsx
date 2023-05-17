import React from "react";
import "./App.css";
import Card from "./Card";
import PreguntasFrecuentesBox from "./PreguntasFrecuentesBox";

function App() {
  return (
    <div className="App">
      <div className="container-card-container">
        <div className="Card-container-app">
          <Card
            srcImg="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/tv.svg"
            texto1="Disfruta en tu TV"
            texto2="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
          />
          <Card
            srcImg="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/popcorn.svg"
            texto1="Disfruta donde quieras"
            texto2="Películas y series ilimitadas en tu teléfono, tablet, computadora y TV."
          />
          <Card
            srcImg="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/crystalball.svg"
            texto1="Crea perfiles para niños"
            texto2="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
          />
          <Card
            srcImg="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/download.svg"
            texto1="Descarga tus series para verlas offline"
            texto2="Guarda tu contenido favorito y tendrás siempre algo para ver."
          />
        </div>
        <div />

        <PreguntasFrecuentesBox
          pregunta="¿Qué es Netflix?"
          text1="Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet."
        />
      </div>
    </div>
  );
}

export default App;
