import styles from "./form.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/todoSlice";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handlerChange = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let newToDoList = input
      ? dispatch(addTodo(input))
      : alert("Insert To Do First!");
    setInput("");
    return newToDoList;
  };

  return (
    <div className={styles.form}>
      <form>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handlerChange}
          value={input}
        />
        <input type="submit" className="submitButton" onClick={handlerSubmit} />
      </form>
    </div>
  );
}
