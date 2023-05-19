import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PreguntasFrecuentesBox.module.css";

function PreguntasFrecuentesBox({ pregunta, text1, text2 }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [svgRotation, setSvgRotation] = useState(0);

  const toggleRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
    setSvgRotation(svgRotation + 45);
  };

  return (
    <div className={styles["PFB-container"]}>
      <div className={styles["PFB-up-container"]}>
        <div className={styles["PFB-pregunta"]}>{pregunta}</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["PFB-cruz"]}
          data-name="Add"
          onClick={toggleRespuesta}
          style={{ transform: `rotate(${svgRotation}deg)` }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {mostrarRespuesta && (
        <div className={styles["PFB-down-container"]}>
          {text1} <br /> <br /> {text2}
        </div>
      )}
    </div>
  );
}

PreguntasFrecuentesBox.propTypes = {
  pregunta: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default PreguntasFrecuentesBox;
