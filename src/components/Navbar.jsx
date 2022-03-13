import "./Navbar.css";
import { Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const buttonClickHandler = () => {
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <div className="nav-search">
          <div className="searchbox-container">
            <SearchIcon className="searchbox-icon" />
            <input type="text" className="nav-input" />
          </div>
        </div>
        <button className="nav-sidebar-button" onClick={buttonClickHandler}>
          {showLinks ? <Close /> : <Menu />}
        </button>
        <div className={"nav-links " + (showLinks ? "" : "hidden")}>
          <ul>
            <Link to="/" className="nav-link" onClick={buttonClickHandler}>
              <li>Home</li>
            </Link>
            <Link to="/shop" className="nav-link" onClick={buttonClickHandler}>
              <li>Shop</li>
            </Link>
            <Link to="/about" className="nav-link" onClick={buttonClickHandler}>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
