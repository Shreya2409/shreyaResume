import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import resume from './resume.pdf'


const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>Hello Recruiters please finf
                    <br />
                    my awsome services are
                </spane>
                <a href={resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}>
                </div>
            </div>
            {/* right side */}
            <div className="cards">
                {/* first card */}
                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji}
                        heading={'Design'}
                        details={"HTML, CSS, React, Jquery"} />
                </div>

                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses}
                        heading={'Developer'}
                        details={"HTML, CSS, JSP, Javascript, React, Jquery"} />
                </div>
                {/* third card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={Humble}
                        heading={'UI/UX'}
                        details={"HTML, CSS, Javascript, React, Jquery"}
                        color="rgba(252, 166, 31, 0.45)" />
                </div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    )
}

export default Services