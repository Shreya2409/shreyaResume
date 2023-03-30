import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instaram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Shreya Khare</span>
                    <span>Frontend Developer with high level
                        of experience in web designing and
                        development and producting the
                        Quality work</span>
                </div>

                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <a><img src={Github} alt="" /></a>
                    <a><img src={LinkedIn} alt="" /></a>
                    <a><img src={Instaram} alt="" /></a>

                </div>


            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
            </div>
        </div>
    )
}

export default Intro