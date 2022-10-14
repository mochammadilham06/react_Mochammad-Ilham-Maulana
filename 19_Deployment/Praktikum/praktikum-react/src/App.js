import SetUpRoutes from "./routes/setUpRoutes";
import styles from "./assets/css/main.module.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.body}>
          <SetUpRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
