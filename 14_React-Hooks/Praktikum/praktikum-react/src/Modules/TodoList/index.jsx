import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "../../Components/Form/Form";
import ToDoAction from "../../Components/ToDoAction/ToDoAction";
import Header from "../../Components/Header/Header";
import todolist from "../../MockData/todolist.json";

export default function TodoList() {
  const [todos, setToDo] = useState([...todolist]);

  const addToDoList = (userInput) => {
    const NEWTODO = { id: uuid(), title: userInput, completed: false };
    setToDo((state) => [...state, NEWTODO]);
  };

  const handlerDelete = (id) => {
    const DELETED = todos.filter((todo) => todo.id !== id);
    setToDo(DELETED);
  };

  const handlerCheckbox = (todo) => {
    const CHECKED = todos.map((todolist) =>
      todolist.id === todo.id
        ? { ...todolist, completed: !todolist.completed }
        : todolist
    );
    setToDo(CHECKED);
  };
  return (
    <div>
      <Header text="Todos" />
      <TodoForm addToDoList={addToDoList} />
      <ToDoAction
        listOfTodo={todos}
        onDelete={handlerDelete}
        onChecked={handlerCheckbox}
      />
    </div>
  );
}
