import React from "react";
import styles from "./Page1.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button>Kupi</button>
      <button>Dodaj u korpu</button>
    </div>
  );
};

export default Buttons;
