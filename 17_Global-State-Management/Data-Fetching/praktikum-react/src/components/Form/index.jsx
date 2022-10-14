import styles from "./form.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/features/todoSlice";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    setInput(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    let newToDoList = !input
      ? alert("Insert To Do First")
      : dispatch(createTodo({ title }));

    return newToDoList;
  };

  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   let newToDoList = input
  //     ? dispatch(createTodo(input))
  //     : alert("Insert To Do First!");
  //   setInput("");
  //   return newToDoList;
  // };

  return (
    <div className={styles.form}>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handlerChange}
          name="title"
        />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}
