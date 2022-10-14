import React from "react";
import { About, AboutApp, AboutAuthor, NotFound, ToDoList } from "../modules";
import { Route, Routes } from "react-router-dom";

const SetUpRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<ToDoList />} />
      <Route path="about" element={<About />}></Route>
      <Route path="about/about-app/" element={<AboutApp />} />
      <Route path="about/about-author/" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SetUpRoutes;
