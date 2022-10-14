import styles from "./list.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { onChecked } from "../../store/features/todoSlice";

export default function Todo({ todo, onDelete, isComplete = true }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.listToDo}>
      {
        <li
          key={todo.id}
          className={todo.completed ? styles.complete : "notyet"}
        >
          <input
            type="checkbox"
            name="title"
            onClick={() => dispatch(onChecked(todo.id))}
            defaultChecked={todo.completed ? isComplete : !isComplete}
          />
          {todo.title}
        </li>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
