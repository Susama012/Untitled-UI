import React from 'react'
import screen from '../assets/screen.png'

function Home() {
  return (
    <>
    <div style={{margin:"20px"}}>
    <div className='first-div'>
      <div>
        <p className='first-line'>Beautiful analytics to grow smarter</p>
        <p className='para'>Powerfull, self-serve product and growth analytics to help you convert, engage, <br />and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className='btn'>
        <button className='btn1'>Demo</button>
        <button className='btn2'>Sign up</button>
      </div>
    </div>

    <div className='scnd-div'>
      <img src={screen} alt="heroimg" className='heroimg'/>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Home