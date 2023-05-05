import React from 'react'
import './Works.css'
import Bsw from "../../img/bsw.jpg"
import haryana from "../../img/haryana.jpg"
import argos from "../../img/argos.png"
import accenture from "../../img/accenture.png"
import wipro from "../../img/wipro.jpg"


const Works = () => {
  return (
    <div className='works'>
         {/* left side */}
         <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>Hello Recruiters please find
                    <br />
                    my awsome services are
                    <br/>
                    my awsome services are
                    <br/>
                </spane>
                    <button className="button s-button">Hire Me</button>
                   <div className="blur s-blur" style={{ background: "#ABF1FF94" }}>
                </div>
            </div>

            {/* right side */}

            <div className="w-right">
              <div className="w-mainCircle">
                <div className="w-secCircle">
                  <img src={Bsw} alt=""/>
                </div>
                <div className="w-secCircle">
                 <img src={haryana} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={argos} alt=""/>
                </div>
                <div class="w-secCircle">
                  <img src={accenture} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={wipro} alt="" />
                </div>
              </div>
          {/* background circles */}
          <div className="w-backCircle blueCircle"></div>
            </div>
    </div>
  )
}

export default Works