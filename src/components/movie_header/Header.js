import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
// import logo from "./meta-image.png"

const Header = () => {
  return (
    <div className='header'>
        <div className="top_left">
        <Link to='/' ><img className='header_logo' src='https://sg-res.9appsdownloading.com/sg/res/jpg/d6/f8/ff0d3ebbce546a98947639587ab0-n1j5.jpg?x-oss-process=style/hq' alt='logo' /></Link>
        <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to='/movies/top_rated' style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>
    </div>
    </div>
  )
}

export default Header