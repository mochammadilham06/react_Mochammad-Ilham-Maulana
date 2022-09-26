import styles from "./form.module.css";
import React, { useState } from "react";

export default function TodoForm({ addToDoList }) {
  const [input, setInput] = useState("");

  const handlerChange = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let newToDoList = input ? addToDoList(input) : alert("Insert To Do First!");
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
