import React, { useContext } from "react";
import "./Works.css";
import Bsw from "../../img/bsw.png";
import haryana from "../../img/haryana.png";
import argos from "../../img/argos.png";
import accenture from "../../img/accenture.png";
import wipro from "../../img/wipro.png";
import sainsburys from "../../img/sainsburys.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 3.5, type: "spring" };

  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        {/* dark Mode */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Hello Recruiters please find
          <br />
          my awsome services are
          <br />
          my awsome services are
          <br />
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}

      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
        >
          <div className="w-secCircle">
            <img src={Bsw} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={haryana} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={argos} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={accenture} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={wipro} alt="" />
          </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
