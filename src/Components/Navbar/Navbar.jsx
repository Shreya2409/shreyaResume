import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Shreya</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={Navbar}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
              offset={-5}
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
              offset={-30}
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
              offset={-30}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Qualification"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Qualification</li>
            </Link>
          </ul>
        </div>
        <Link
          spy={true}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
          offset={-40}
        >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
