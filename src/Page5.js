import React from "react";
import styles from "./Page5.module.css";
import Mask12 from "./img/Mask-12.png";
import surface1 from "./img/surface1.png";
const Page5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Gdje želite da Vam dostavimo proizvod?!</h3>
      </div>
      <div className={styles.img_form}>
        <img alt="img" src={Mask12} />
        <form className={styles.form}>
          <label for="name">Ime i prezime</label>
          <input type="text" />
          <label for="name">Ulica i broj</label>
          <input type="text" />
          <label for="name">Grad</label>
          <input type="text" />
          <label for="email">Email adresa</label>
          <input type="text" />
          <label for="name">Broj telefona</label>
          <input type="text" />
          <label for="name">Vaša poruka</label>
          <textarea rows="8" />
          <button>Kupi</button>

          <p>
            <span>
              <img alt=" logo" src={surface1} />
            </span>{" "}
            Vaša kupovina je sigurna
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page5;
