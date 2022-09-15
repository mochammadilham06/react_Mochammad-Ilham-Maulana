import HeaderPage from "../../components/Header/Header";
import { mockToDoList } from "../../API/mockData";
import "../../assets/css/main.css";
export default function ToDoList() {
  return (
    <>
      <HeaderPage text="To Do App" />
      <ul className="todo-list">
        {mockToDoList.map((todo) => (
          <li
            key={todo.id}
            className={!todo.completed ? "todo done" : "todo undone"}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
