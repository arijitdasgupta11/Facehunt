import React from "react";
import SearchIcon from "../search.svg";
import '../Navbar.css'
const Navbar = () => {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
      <img src="https://i.postimg.cc/Hnf1jRvh/press-start.png" class="img">
      </img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
  
        
          <li className="nav-item active" class="list">
            <button className="nav-link" href="#" class="button2">
              New Post <span className="sr-only"></span>
            </button>
          </li>
          

      <div className="search" class="list">
        <input
          value=""
          placeholder="Search for movies"
          class="inputec"
        />
        <img
          src={SearchIcon}
          alt="search"
          class="img3"
          
        />
        
      </div>
      <li className="nav-item active" class="list">
            <button className="nav-link" href="#" class="button">
              Ad Free <span className="sr-only"></span>
            </button>
          </li>
          <li className="nav-item active" class="list">
              <span class="sign">Sign In </span>
          </li>
          <li className="nav-item active" class="list">
            <button className="nav-link" href="#" class="button">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;