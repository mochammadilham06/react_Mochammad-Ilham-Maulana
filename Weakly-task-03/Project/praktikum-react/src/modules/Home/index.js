import React, { useState } from "react";
import { About, Contact, Footer, Navbar } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
