import React from "react";
import styles from "./notfound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.fof}>
        <h1>Error 404</h1>
        <p>This Page Not Found or Cannot Be Reached</p>
        <Link to="/">
          <button className={styles.button}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
