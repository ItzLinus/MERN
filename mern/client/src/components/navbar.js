import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 42 + '%'}} src="https://i.ibb.co/H72Y3D3/873bd144c8c9438796ef8c6a494bcf12.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarNavDropdown"
         aria-controls="navbarNavDropdown"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
             <NavLink className="nav-link" to="/home"> 
              Home
             </NavLink>
             <NavLink className="nav-link" to="/carmodels"> 
              Available Models
             </NavLink>
             <NavLink className="nav-link" to="/create">
              Create Record
             </NavLink>
           </ul>
       </div>
     </nav>
   </div>
 );
}