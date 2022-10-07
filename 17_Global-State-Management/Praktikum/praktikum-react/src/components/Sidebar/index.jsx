import { Link } from "react-router-dom";
import "./styles.css";

const SideBar = () => {
  const closeNav = () => {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("this").style.marginLeft = "0";
  };
  const openNav = () => {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("this").style.marginLeft = "250px";
  };

  return (
    <div>
      <button className="openbtn" onClick={openNav}>
        ☰
      </button>
      <div id="sideBar" className="sidebar">
        <a className="closebtn" onClick={closeNav}>
          ×
        </a>
        <Link to="/">Home</Link>
        <Link to="/about/about-app">About App</Link>
        <Link to="/about/about-author">About Author</Link>
      </div>
    </div>
  );
};

export default SideBar;
