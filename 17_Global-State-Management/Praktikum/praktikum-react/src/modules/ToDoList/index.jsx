import React from "react";
import { Header, Navbar, ToDoAction, TodoForm, Footer } from "../../components";

export default function ToDoList() {
  return (
    <>
      <div id="main">
        <Navbar />
        <div>
          <Header text={"Todos"} />
          <TodoForm />
          <ToDoAction />
        </div>
        <Footer />
      </div>
    </>
  );
}
