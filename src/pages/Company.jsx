import React from 'react'
import FunctionalCLogo from '../assets/FunctionalCLogo.png'
import Avatar from '../assets/Avatar.png'

function Company() {
  return (
    <div className='page-div'>
        <div className='clogo'>
            <img src={FunctionalCLogo} alt="" />
        </div>
        <div className='para-div'>
          <p className='para1'>We've been using Untitled to kickstart every new</p> 
          <p className='para1'>Project and cant't imagine working without it.</p>
        </div>
        <div className='clogo'>
            <img src={Avatar} alt="" className='avatarImg'/>
        </div>
    </div>
  )
}

export default Company