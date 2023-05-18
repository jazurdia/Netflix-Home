import React from "react";
import "./App.css";
import Card from "./Card";
import PreguntasFrecuentesBox from "./PreguntasFrecuentesBox";
import LogSection from "./LogSection";
import UpBanner from "./UpBanner";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="App">
      <div className="app-top-bar-container">
        <TopBar />
      </div>
      <div className="app-big-text-container">
        <UpBanner />
        <LogSection />
      </div>
      <div className="app-card-container-big">
        <div className="app-card-container-small">
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
      </div>
      <div className="app-preguntas-frecuentes-container">
        <span className="app-span-preguntas">Preguntas Frecuentes</span>
        <PreguntasFrecuentesBox
          pregunta="¿Qué es Netflix?"
          text1="Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet."
          text2="Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
        />
        <PreguntasFrecuentesBox
          pregunta="¿Cuánto cuesta Netflix?"
          text1="Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde USD4.99 hasta USD10.99 al mes. Sin costos adicionales ni contratos."
          text2=""
        />
        <PreguntasFrecuentesBox
          pregunta="¿Dónde puedo ver Netflix?"
          text1="Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde USD4.99 hasta USD10.99 al mes. Sin costos adicionales ni contratos."
          text2="Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
        />
        <PreguntasFrecuentesBox
          pregunta="¿Cómo cancelo?"
          text1="Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
          text2=""
        />
        <PreguntasFrecuentesBox
          pregunta="¿Qué puedo ver en Netflix?"
          text1="Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
          text2=""
        />
        <PreguntasFrecuentesBox
          pregunta="¿Es bueno Netflix para los niños?"
          text1="La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio."
          text2="Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
        />
      </div>
      <div className="app-log-section-container">
        <LogSection />
      </div>
    </div>
  );
}

export default App;
