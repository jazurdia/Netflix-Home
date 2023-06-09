import React from "react";
import styles from "./LogSection.module.css";

function LogSection() {
  return (
    <div className={styles["lg-container-big"]}>
      <div className={styles["lg-container-small"]}>
        <span className={styles["lg-texto"]}>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </span>
        <div className={styles["lg-down-part"]}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="  Email"
            className={styles["lg-email-input"]}
          />
          <button className={styles["lg-boton"]} type="button">
            <span className={styles["lg-button-text"]}>Comenzar</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["lg-svg-icon"]}
              data-name="ChevronRight"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogSection;
