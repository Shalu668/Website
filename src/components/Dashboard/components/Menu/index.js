import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
 class Menu extends React.Component{
     render(){
         return(
             <div className="menu">
                 <ul>
                     <li>
                         <Link to="/dashboard">Dashboard</Link></li>
                     <li>
                         <Link to="/dashboard/attendance">Attandance</Link></li>
                     <li>
                         <Link to="/dashboard/settings">Setting</Link></li>
                     <li>
                         <Link to="/">Logout</Link></li>
                 </ul>
             </div>
         )
     }
 }

 export default Menu;