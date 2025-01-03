import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import oliva from '../assets/oliva.png'
import blackboy from '../assets/blackboy.png'
import glassgirl from '../assets/glassgirl.png'
function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Our blog</h2>
        <h1>Lastest blog posts</h1>
        <p>Tool and strategies modern teams need to help their companies grow.</p>
        <button className="view-all-button">View all posts</button>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
          <img src={image} alt="UX review presentations" />
          <div className="blog-content">
            <span className="blog-category">Design</span>
            <h3>UX review presentations ↗</h3>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className="blog-author">
              <img src={oliva} alt="Author" />
              <span>Olivia Rhye</span>
              <span>20 Jan 2024</span>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={image2} alt="Migrating to Linear 101" />
          <div className="blog-content">
            <span className="blog-category">Product</span>
            <h3>Migrating to Linear 101 ↗</h3>
            <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
            <div className="blog-author">
              <img src={blackboy} alt="Author" />
              <span>Phoenix Baker</span>
              <span>19 Jan 2024</span>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={image3} alt="Building your API stack" />
          <div className="blog-content">
            <span className="blog-category">Software Engineering</span>
            <h3>Building your API stack ↗</h3>
            <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <div className="blog-author">
              <img src={glassgirl} alt="Author" />
              <span>Lana Steiner</span>
              <span>18 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog