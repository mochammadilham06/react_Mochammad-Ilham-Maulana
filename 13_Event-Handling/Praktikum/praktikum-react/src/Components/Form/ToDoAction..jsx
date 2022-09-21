import React from "react";
import Todo from "./ListTodo";

export default function ToDoAction({ listOfTodo, onDelete, checked }) {
  return (
    <div className="toDoAction">
      <ul>
        {listOfTodo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            checked={checked}
          />
        ))}
      </ul>
    </div>
  );
}
