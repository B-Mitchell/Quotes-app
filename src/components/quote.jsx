import { Link } from 'react-router-dom';
import React from 'react'
import "./styles/blog.css"

const Quote = () => {
  return (
    <main>
      <div className='blogNav'>
      <Link to="/" className='blogLinks'><h2>Featured Quotes</h2></Link>
      <Link to="/liked" className='blogLinks'><h2>Liked Quotes</h2></Link>
      </div>
    </main>
  )
}
export default Quote