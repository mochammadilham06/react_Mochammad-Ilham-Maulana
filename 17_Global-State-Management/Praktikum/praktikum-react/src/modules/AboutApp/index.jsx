import React from "react";
import { Footer, SideBar } from "../../components/index";
import styles from "./app.module.css";

const AboutApp = () => {
  return (
    <>
      <div id="this">
        <SideBar />
        <div>
          <h3 className={styles.title}>About the App</h3>
          <p className={styles.paragraf}>
            In this app, you can add, delete, submit and edit items. To edit
            items, simply double click on it. Once you are done, press the enter
            key to resubmit. This app will persist your data in the browser
            local storage. So whether you reload, close your app or reopened it,
            you still have access to your to- dos items.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutApp;
