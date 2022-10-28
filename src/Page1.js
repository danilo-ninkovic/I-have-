import styles from "./Page1.module.css";
import Shoping from "./img/shopping-cart.svg";
import Surface from "./img/surface1.svg";
import Hamb from "./img/hamb.svg";
import logo from "./img/logoSmal.png";
import Mask2 from "./img/Mask2.png";
import Mask3 from "./img/Mask-3.png";
import Mask4 from "./img/Mask-4.png";
import Mask5 from "./img/Group-23.png";
import Mask from "./img/Mask.png";
import User from "./img/user.svg";
import surface1 from "./img/surface1.png";
import Face from "./img/face.png";
import Twiter from "./img/Twiter.png";
import In from "./img/In.png";

import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import Buttons from "./Buttons";
function Page1() {
  const price = `41,99 `;
  const paragraph = `
  Large-size earmuffs that could cover the whole ears,
  paired with thick, soft earmuffscan make it
  comfortable to immerse in music for a long time.
  `;
  return (
    <div className={styles.grid}>
      {/* LOGO */}
      <div className={styles.logo}>
        {" "}
        <img alt=" logo" src={logo} />
      </div>
      {/* MENU */}
      <div className={styles.menu}>
        {" "}
        <a href="#pocetna">POČETNA</a>
        <a href="#proizvodi">PROIZVODI</a>
        <a href="#rasprodaja">RASPRODAJA</a>
        <a href="#akcija">AKCIJA</a>
        <a href="#kontakt">KONTAKT</a>
      </div>
      {/* 3 ICONS ON MENU - RIGHT */}
      <div className={styles.topIcons}>
        {" "}
        <a href="#surface">
          <img alt=" logo" src={Surface} />
        </a>
        <a href="#Shoping">
          <img alt=" logo" src={Shoping} />
        </a>
        <a href="#Hamb">
          <img alt=" logo" src={Hamb} />
        </a>
      </div>
      {/* 4 COLUMN IMAGES ON LEFT */}
      <div className={styles.smalImgs}>
        <img alt="img" src={Mask5} />
        <img alt="img" src={Mask4} />
        <img alt="img" src={Mask3} />
        <img alt="img" src={Mask2} />
      </div>
      {/* BIG IMAGE */}
      <div className={styles.image}>
        <img alt="img" src={Mask} className={styles.mask} />
      </div>
      {/* PRODUCT DETAILS */}
      <div className={styles.product}>
        <div className={styles.stars}>
          <i>
            {" "}
            <FaStar color="#FFC107" />{" "}
          </i>
          <i>
            {" "}
            <FaStar color="#FFC107" />{" "}
          </i>
          <i>
            {" "}
            <FaStar color="#FFC107" />{" "}
          </i>
          <i>
            {" "}
            <FaStar color="#FFC107" />{" "}
          </i>
          <i>
            {" "}
            <FaStar color="#CCCCCC" />{" "}
          </i>
        </div>
        <h1>A18 Wireless headset</h1>
        <p>{paragraph}</p>
        <div className={styles.price}>
          <p>{price}KM</p>
          <div className={styles.input_wrapper}>
            <i>
              {" "}
              <FaMinus />{" "}
            </i>
            <input type="text" value={1}></input>
            <i>
              {" "}
              <FaPlus />{" "}
            </i>
          </div>
        </div>

        <Buttons />
        <div className={styles.paragraphDown}>
          <p>
            {" "}
            <span>
              <img alt=" logo" src={User} />
            </span>{" "}
            Trenutno 18 osoba gleda ovaj proizvod
          </p>
          <p>
            <span>
              <img alt=" logo" src={surface1} />
            </span>{" "}
            Proizvod je dostupan na lageru.
          </p>
        </div>
      </div>
      {/* SOCIAL ICONS */}
      <div className={styles.icons}>
        <img alt=" Face" src={Face} />
        <img alt=" Twiter" src={Twiter} />
        <img alt=" In" src={In} />
      </div>
    </div>
  );
}

export default Page1;
