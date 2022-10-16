import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Selamat Datang di Website Statik Ilham Maul.</p>
        <a
          className="App-link"
          href="https://github.com/mochammadilham06"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Saya
        </a>
      </header>
    </div>
  );
}

export default App;
