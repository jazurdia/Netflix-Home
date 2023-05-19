import React from "react";
import styles from "./UpBanner.module.css";

function UpBanner() {
  return (
    <div className={styles["upbanner-container"]}>
      <span className={styles["upbanner-grande"]}>
        Películas y series ilimitadas y mucho más
      </span>
      <span className={styles["upbanner-chico"]}>
        Planes desde USD4.99 al mes{" "}
      </span>
    </div>
  );
}

export default UpBanner;
