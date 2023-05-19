import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ srcImg, texto1, texto2 }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles.icon}>
        <img
          width="100px"
          height="100px"
          src={srcImg}
          alt="Crea perfiles para niños"
          className={styles["card-img"]}
        />
      </div>
      <div className={styles["card-texto1"]}>
        <p>{texto1}</p>
      </div>
      <div className={styles["card-texto2"]}>
        <p>{texto2}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  srcImg: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
};

export default Card;
