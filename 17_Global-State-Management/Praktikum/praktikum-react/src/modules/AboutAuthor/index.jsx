import React from "react";
import { Footer, SideBar } from "../../components";
import styles from "./author.module.css";

const AboutAuthor = () => {
  return (
    <>
      <div id="this">
        <SideBar />
        <div>
          <h3 className={styles.title}>About the Author</h3>
          <p className={styles.paragraf}>
            This app was developed by someone, a self-taught web developer and
            technical writer
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutAuthor;
