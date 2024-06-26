import React, {   useEffect } from 'react'
import {Link, useLocation} from "react-router-dom"
import jwtDecode from "jwt-decode";
import $ from "jquery"
// import logo from "../images/notes.png"

function Navbar() {

useEffect(() => {
    $(".nav-link").click(()=>{
        $('.navbar-collapse').removeClass('show');
    }) 
}, [])


  
    let location = useLocation() ; 

    function logOut(){
        localStorage.removeItem("userToken");
        localStorage.removeItem("noteId");
    }

    
       if(localStorage.getItem("userToken")) {
            let userToken = localStorage.getItem("userToken");
             let user =  jwtDecode(userToken)
            var userName = user.first_name
       }




  return (
   <>
   
   <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            {location.pathname === "/home" || location.pathname === "/"  ?   <span className='navbar-user' >أهلا  {userName} <i className="fas fa-heart"></i></span>  :<Link  className="navbar-brand" to="/home"> <img className='logo' src={process.env.PUBLIC_URL + '/notes.png'} alt="logo" /></Link>  }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               {location.pathname === "/home" || location.pathname === "/" ? <ul className="navbar-nav mr-auto">     
                    <li className="nav-item">
                        <Link onClick={logOut}  className="nav-link" to="/login"> خروج</Link>
                    </li>
                </ul> :  <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${location.pathname !== "/home" ? 'margin-bottom' : ""}  ` }    >
                        <Link  className="nav-link" to="/register"> تسجيل جديد</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" to="/login">تسجيل دخول</Link>
                    </li>
                </ul>  } 
               
            </div>
            
        
        </div>
    </nav>
   </>
  )
}

export default Navbar
