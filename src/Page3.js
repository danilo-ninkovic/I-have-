import React from "react";
import Buttons from "./Buttons";
import styles from "./Page3.module.css";

const Page3 = () => {
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem
  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
  `;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3>Iskoristiti momente uživanja, na pravi način</h3>
        <p>{paragraph}</p>
        <Buttons />
      </div>
    </div>
  );
};

export default Page3;
