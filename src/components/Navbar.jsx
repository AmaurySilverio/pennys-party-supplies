import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PPS <img src="../images/flower.svg" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/whoWeArePage"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/servicesPage"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/suppliesPage"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Supplies
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/decorationsPage"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Decorations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactPage"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" path="/contactPage">
              Contact
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
