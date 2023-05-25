import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instaram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Shreya Khare</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development and producting the Quality work
          </span>
        </div>

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a>
            <img src={Github} alt="" />
          </a>
          <a>
            <img src={LinkedIn} alt="" />
          </a>
          <a>
            <img src={Instaram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          className="floating-div"
        />
        <motion.div
          style={{ top: "-4%", left: "68%" }}
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          style={{ top: "18rem", left: "0rem" }}
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur div */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb (238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FE",
            top: "17rem",
            left: "-9rem",
            height: "11rem",
            width: "21rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
