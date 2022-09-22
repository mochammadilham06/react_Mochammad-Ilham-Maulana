import React from "react";
import styles from "./header.module.css";
const Header = ({ text }) => {
  return (
    <>
      <h1 className={styles.headerStyle}>{text}</h1>
    </>
  );
};

export default Header;
