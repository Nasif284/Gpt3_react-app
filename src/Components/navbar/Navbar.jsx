import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import Logo from '../../assets/logo.svg'
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const Menu=() =>(
    <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open Ai</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library </a></p>
    </>
  )

  
  return (
    <div className='gpt3__navbar'>
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="Logo" />
      </div> 
      <div className="gpt3__navbar-links_container">
          <Menu/>
      </div>
    </div>
    <div className="gpt3__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign Up</button>
    </div>
    <div className="gpt3__navbar-menu">
      {toggle
      ? <RiCloseLine color="#fff" size={27} onClick={()=>settoggle(false)}/>
      :  <RiMenu3Line color='#fff' size={27} onClick={()=>settoggle(true)}/>
      }
      {toggle && (<div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
          <Menu/>          
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign Up</button>
          </div>
        </div>
      </div>
      )}
        
    </div>
      
    </div>
  )
}

export default Navbar
