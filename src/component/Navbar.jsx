import React from 'react'
import { Link } from 'react-router-dom'
import untitledui from '../assets/untitledui.png'
import images from '../assets/images.png'
import '../component/Navbar.css'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='nav-logo'>
            <img src={untitledui} alt="logo" className='logo'/>
            <p>Untitled UI</p>
        </div>

        <div className='nav-items'>
            <Link to="/" className='link'>Home</Link>
            <Link to='/products' className='link'>Products</Link>
            <Link to='/resourses' className='link'>Resources</Link>
            <Link to='/pricing' className='link'>Pricing</Link>
            <Link to='/blogs' className='link'>Blogs</Link>
        </div>

        <div >
            <img src={images} alt="profile" className='profile'/>
        </div>
    </nav>
    <hr />
    </>
  )
}

export default Navbar