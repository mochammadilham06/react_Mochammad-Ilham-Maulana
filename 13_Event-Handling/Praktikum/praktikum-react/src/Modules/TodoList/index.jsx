import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "../../Components/Form/Form";
import ToDoAction from "../../Components/Form/ToDoAction.";
import Header from "../../Components/Header/Header";
import data from "../../MockData/data.json";

export default function TodoList() {
  const [todos, setToDo] = useState([...data]);

  const addToDoList = (userInput) => {
    let newTodo = [...todos];
    newTodo = [
      ...newTodo,
      {
        id: uuid(),
        title: userInput,
        completed: false,
      },
    ];
    setToDo(newTodo);
  };

  const handlerDelete = (id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setToDo(deletedTodo);
  };

  const handlerCheckbox = (todo) => {
    let checkedTodo = todos.map((data) =>
      data.id === todo.id ? { ...data, completed: !data.completed } : data
    );
    setToDo(checkedTodo);
  };
  return (
    <>
      <Header text="Todos" />
      <TodoForm addToDoList={addToDoList} />
      <ToDoAction
        listOfTodo={todos}
        onDelete={handlerDelete}
        checked={handlerCheckbox}
      />
    </>
  );
}
