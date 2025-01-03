import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Blogs from './pages/Blogs'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Companies from './component/Companies'
import Features from './pages/Features'
import Company from './pages/Company'
import AdvncAnalytic from './pages/AdvncAnalytic'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import FreeTrial from './pages/FreeTrial'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/resources' element={ <Resources/>}/>
        <Route path='/blogs' element={ <Blogs />}>Blogs</Route>
        <Route path='/pricing' element={ <Pricing/> }>Pricing</Route>
        <Route path='/products' element={<Products/>}>Products</Route>
      </Routes>
      </BrowserRouter>
      <Companies />
      <Features />
      <Company />
      <AdvncAnalytic />
      <Faq />
      <Blog />
      <FreeTrial />
      <Footer />
    </>
  )     
}

export default App