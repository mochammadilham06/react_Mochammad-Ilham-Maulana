import "./Assets/css/main.css";
import TodoList from "./Modules/TodoList";
import styles from "./Assets/css/main.module.css";

function App() {
  return (
    <div className={styles.body}>
      <TodoList />
    </div>
  );
}

export default App;
