import React from 'react'
import './whatGpt.css'
import Features from '../../Components/feature/Feature'
const WhatGpt = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
      <div className="gpt3__whatgpt3-features">
        <Features title="What if GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are Beyond Your Imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features title="Charbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Features title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />

      </div>
    </div>
  )
}

export default WhatGpt
