import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
          <div className="gpt3__footer-head">
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            <button>Request Early Access</button>
          </div>
          <div className="gpt3__footer-foot">
            <div className="gpt3__footer-foot_heading">
              <img src={Logo} alt="" />
              <p>Crechterwoord K12 182 DK Alknjkcb,<br /> All Rights Reserved</p>
            </div>
            <div className='gpt3__footer-foot_content'>
            <div className="gpt3__footer-foot_links">
              <h4>Links</h4>
              <a href="">Overons</a>
              <a href="">Social Media</a>
              <a href="">Counters</a>
              <a href="">Contact</a>
            </div>
            <div className="gpt3__footer-foot_company">
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className="gpt3__footer-foot_touch">
              <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
