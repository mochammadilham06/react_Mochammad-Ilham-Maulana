import React from "react";
import { useState } from "react";

export default function Todo({ todo, onDelete, checked }) {
  const [isComplete, setIsComplete] = useState(true);

  return (
    <div className="listTodo">
      {
        <>
          <li className={todo.completed ? "complete" : "notyet"}>
            <input
              type="checkbox"
              onClick={() => checked(todo)}
              defaultChecked={todo.completed ? isComplete : !isComplete}
            />
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
