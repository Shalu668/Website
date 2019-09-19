import React from "react";
import "./index.css"
import{Route} from "react-router-dom";
import Attendance from "./components/Attendance";
import Settings from "./components/Settings";
import UserHome from "./components/UserHome";

class Content extends React.Component{

    render(){
        return(
            <div className="content">
           <Route exact path="/dashboard" component={UserHome }/>
           <Route exact path="/dashboard/attendance" component={Attendance }/>
           <Route exact path="/dashboard/settings" component={Settings }/>

            </div>
        )
    }
}

export default Content;