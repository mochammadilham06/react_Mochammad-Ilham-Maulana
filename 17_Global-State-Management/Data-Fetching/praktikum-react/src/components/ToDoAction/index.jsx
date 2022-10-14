import React, { useEffect } from "react";
import styles from "./todoaction.module.css";
import Todo from "../ListOfTodo/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/features/todoSlice";

export default function ToDoAction({ onDelete, onChecked }) {
  const dispatch = useDispatch();
  const listOfTodo = useSelector((state) => state.todo.data);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  return (
    <div className={styles.toDoAction}>
      <ul>
        {listOfTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
