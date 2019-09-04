import React from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends React.Component
{
render(){
    return(

        
       
            <nav>
    <div className="Header-comp">
        <h1>Welcome to Keera Technology
            </h1>
        </div>
    <div className="lis"><ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>

        <li>Services</li>
        <li>Aboutus</li>
        <li>contactus</li>
    </ul>
    </div>
    </nav>
    
    );
    }
}


export default Header;