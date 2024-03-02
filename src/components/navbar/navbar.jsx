import React from 'react'
import './navbar.css';
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-sm navbar-bg-custom fixed-top">
    <div className="container-fluid nav">
      <div className='title'>
      <span>Practical Park</span>
      </div>
        <ul className="navbar-nav ml-auto navbar-opt">
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

       <ul className="navbar-nav ml-auto navbar-opt">
        <li className="nav-item">
                <div className="nav-link opt" href="">Profile</div>
            </li>
          
        </ul>
        <ul className="navbar-nav ml-auto hamburger">
          <li className='nav-link  opt p-3' href="javascript:void(0);" style={{display:"inline"}} onclick="myFunction()">
             <i class="fa fa-bars"></i>
          </li>
        </ul>
    </div>
  </nav>
  )
}


