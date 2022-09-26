import React from "react";
import styles from "./todoaction.module.css";
import Todo from "../ListOfTodo/index";

export default function ToDoAction({ listOfTodo, onDelete, onChecked }) {
  return (
    <div className={styles.toDoAction}>
      <ul>
        {listOfTodo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onChecked={onChecked}
          />
        ))}
      </ul>
    </div>
  );
}
