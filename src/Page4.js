import React from "react";
import styles from "./Page4.module.css";
import Mask8 from "./img/Mask-8.png";
import Mask9 from "./img/Mask-9.png";
import Mask10 from "./img/Mask-10.png";
import Mask11 from "./img/Mask-11.png";
const Page4 = () => {
  const paragraph = `Large-size earmuffs that could cover the whole ears,
     paired with thick, soft earmuffscan make it
     comfortable to immerse in music for a long time.
    `;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {" "}
        <h3>Povezani proizvodi</h3>
        <p>{paragraph}</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card1}>
          <img alt="img" src={Mask8} />
          <h4>Casque Bluetooth DeFunc</h4>
          <p>39,99 KM</p>
        </div>

        <div className={styles.card2}>
          <img alt="img" src={Mask9} />
          <h4>Casque Bluetooth DeFunc</h4>
          <p>39,99 KM</p>
        </div>

        <div className={styles.card3}>
          <img alt="img" src={Mask10} />
          <h4>Casque Bluetooth DeFunc</h4>
          <p>39,99 KM</p>
        </div>

        <div className={styles.card4}>
          <img alt="img" src={Mask11} />
          <h4>Casque Bluetooth DeFunc</h4>
          <p>39,99 KM</p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
