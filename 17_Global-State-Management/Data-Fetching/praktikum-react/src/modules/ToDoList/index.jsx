import React from "react";
import { useDispatch } from "react-redux";
import { Header, Navbar, ToDoAction, TodoForm, Footer } from "../../components";
import { deleteTodo } from "../../store/features/todoSlice";

export default function ToDoList() {
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div id="main">
        <Navbar />
        <div>
          <Header text={"Todos"} />
          <TodoForm />
          <ToDoAction onDelete={handlerDelete} />
        </div>
        <Footer />
      </div>
    </>
  );
}
