import styles from "./list.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { checkedTodo, deletedTodo } from "../../store/features/todoSlice";

export default function Todo({ todo, isComplete = true }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.listToDo}>
      {
        <li className={todo.completed ? styles.complete : "notyet"}>
          <input
            type="checkbox"
            onClick={() => dispatch(checkedTodo(todo.id))}
            defaultChecked={todo.completed ? isComplete : !isComplete}
          />
          {todo.title}
        </li>
      }
      <button onClick={() => dispatch(deletedTodo(todo.id))}>Delete</button>
    </div>
  );
}
