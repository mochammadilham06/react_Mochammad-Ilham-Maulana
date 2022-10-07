import React from "react";
import styles from "./todoaction.module.css";
import Todo from "../ListOfTodo/index";
import { useSelector } from "react-redux";

export default function ToDoAction() {
  const listOfTodo = useSelector((state) => state.todos);
  return (
    <div className={styles.toDoAction}>
      <ul>
        {listOfTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
