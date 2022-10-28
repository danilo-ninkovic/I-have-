import React from "react";
import styles from "./Page6.module.css";
import headphones from "./img/headphones.png";
import Face from "./img/face.png";
import Twiter from "./img/Twiter.png";
import In from "./img/In.png";
import logo from "./img/logoSmal.png";
const Page6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.kontakt}>
        <h5>KONTAKT I PODRŠKA</h5>
        <p>Adresa: Prote Nikole Kostića bb</p>
        <p>Email: info@simel-bih.com</p>
        <p>Skype: simel-bih</p>
        <div>
          {" "}
          <span>
            <img alt=" logo" src={headphones} />
          </span>
          <span>
            <p>Pozovite nas</p>
            <p>+387 51 535 560</p>
          </span>
        </div>
      </div>
      <div className={styles.oNama}>
        <h5>O NAMA</h5>
        <p>Dostava</p>
        <p>Garancija kvaliteta</p>
        <p>Način plaćanja</p>
      </div>
      <div className={styles.pomoc}>
        <h5>POMOĆ</h5>
        <p>Kako se registrovati?</p>
        <p>Često postavljana pitanja</p>
        <p>Uslovi korištenja</p>
      </div>
      <div className={styles.socMreze}>
        <h5>SOCIJALNE MREŽE</h5>
        <p>
          <a href="#surface">
            <img alt=" logo" src={Face} />
          </a>{" "}
          <a href="#surface">
            <img alt=" logo" src={Twiter} />
          </a>{" "}
          <a href="#surface">
            <img alt=" logo" src={In} />
          </a>
        </p>
        <p></p>
        <p>
          {" "}
          <img alt=" logo" src={logo} />
        </p>
      </div>
    </div>
  );
};

export default Page6;
