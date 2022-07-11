import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className={styles.copy}>
          &copy;Copyright 2022. All Right Reserved By Slity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
