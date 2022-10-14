import SetUpRoutes from "./routes/setUpRoutes";
import styles from "./assets/css/main.module.css";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className={styles.body}>
        <SetUpRoutes />
      </div>
    </Provider>
  );
}

export default App;
