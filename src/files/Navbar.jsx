import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() => {
    return(
        <>
       <nav style={{backgroundColor:"pink"}} className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ml-1">
    <a className="navbar-brand" href="/">SeaMeals</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li >
        <li  className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li >
        <li  className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li >
        <li  className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li >
        
      </ul>
     
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    
  </div>
  <button className="orderbt"> <NavLink className="nav-link" to="/order" style={{color:"white",textDecoration:"none"}}>Go To Food Order</NavLink></button>
</nav>

        
        </>
    )
}
export default Navbar;