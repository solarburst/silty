import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
// import { ReactComponent as ThemeSwitch } from "../../assets/img/switcher.svg";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo className={styles.image} />
            <h3 className={styles.title}>Slity</h3>
          </div>
          <div className={styles.navigation}>
            <div className={styles.link}>nav1</div>
            <div className={styles.link}>nav2</div>
            <div className={styles.link}>nav1</div>
            <div className={styles.link}>nav1</div>
            <div className={styles.link}>nav1</div>
          </div>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
