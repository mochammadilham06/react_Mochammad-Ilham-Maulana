import styles from "./list.module.css";
import React from "react";

export default function Todo({ todo, onDelete, onChecked, isComplete = true }) {
  return (
    <div className={styles.listToDo}>
      {
        <li className={todo.completed ? styles.complete : "notyet"}>
          <input
            type="checkbox"
            onClick={() => onChecked(todo)}
            defaultChecked={todo.completed ? isComplete : !isComplete}
          />
          {todo.title}
        </li>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
