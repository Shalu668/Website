import React from "react";
import "./index.css";

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
        <li>HOME</li>
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