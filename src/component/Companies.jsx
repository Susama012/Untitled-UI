import React from 'react'
import boltshift from '../assets/boltshift.png'
import lightbox from '../assets/lightbox.png'
import featherdev from '../assets/featherdev.png'
import spherule from '../assets/spherule.png'
import globalbank from '../assets/globalbank.png'
import nietzsche from '../assets/nietzsche.png'

function Companies() {
  return (
    <>
    <div className='comp-div'>
        <p className='comp-para'>join 4,000+ companies already growing</p> <br />
        <ul className='comp-list'>
          <img src={boltshift} alt="" className='complogo'/>
          <img src={lightbox} alt="" className='complogo'/>
          <img src={featherdev} alt="" className='complogo'/>
          <img src={spherule} alt="" className='complogo'/>
          <img src={globalbank} alt="" className='complogo'/>
          <img src={nietzsche} alt="" className='complogo'/>
        </ul>
    </div>
    <hr />
    </>
  )
}

export default Companies