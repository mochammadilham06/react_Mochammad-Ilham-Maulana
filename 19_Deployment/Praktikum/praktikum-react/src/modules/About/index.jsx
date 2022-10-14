import React from "react";
import { Footer, SideBar } from "../../components";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div id="this">
        <SideBar />
        <div>
          <h3 className={styles.title}>About</h3>
          <p className={styles.paragraf}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
