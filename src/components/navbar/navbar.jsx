import React from 'react'
import './navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-bg-custom fixed-top">
    <div className="container-fluid nav">
      <span className="navbar-text h3">Practical Park</span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <div className="nav-link active  opt" href="">Home</div>
          </li>
          <li className="nav-item">
            <div className="nav-link  opt" href="">Communities</div>
          </li>
          <li className="nav-item">
            <div className="nav-link opt" href="">Blogs</div>
          </li>
        </ul>
       <ul className="navbar-nav ml-auto">
        <li className="nav-item">
                <div className="nav-link opt" href="">Profile</div>
            </li>
        </ul>
    </div>
  </nav>
  )
}


