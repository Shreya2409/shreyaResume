import React from 'react'
import './Footer.css'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>shreya.stard@gmail.com</span>
            <div className="f-icons">
                <a href='https://www.linkedin.com/in/shreya-khare-b7105a116/'><LinkedIn color='white' size='3rem'/></a>
                <a href='https://www.facebook.com/'><Facebook color='white' size='3rem'/></a>
                <a href='https://github.com/Shreya2409/shreyaResume'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer