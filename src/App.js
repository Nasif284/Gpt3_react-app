import React,{useState} from 'react';
import './App.css';
import { Footer, Blog, Header, Features, Possibility, WhatGpt} from './Containers'
import {CTA, Brand, Navbar} from './Components'
function App() {

  return (
    <div className='app'>
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGpt/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;