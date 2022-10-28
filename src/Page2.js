import React from "react";
import styles from "./Page2.module.css";

const Page2 = () => {
  const paragraph = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    `;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>OPIS</p>
          <p>SPECIFIKACIJE</p>
          <p>OSTALO</p>
        </div>
        <div className={styles.lines}>
          <div />
          <div />
        </div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </div>
  );
};

export default Page2;
