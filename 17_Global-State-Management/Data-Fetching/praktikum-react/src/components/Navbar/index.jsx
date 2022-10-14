import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  return (
    <div>
      <button className="openbtn" onClick={openNav}>
        ☰
      </button>
      <div id="mySidebar" className="sidebar">
        <a className="closebtn" onClick={closeNav}>
          ×
        </a>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="about/">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
