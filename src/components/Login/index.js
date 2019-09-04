import React from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="log-style">
                    <form>
                        <label for="uname">UserName:</label>
                        <input type="text" placeholder="Enter Username" name="uname"></input>
                        <br /><br /><label for="psw">Password:</label>
                        <input type="password" placeholder="Enter Password" name="psw"></input>
                        <br /> <br />
                        <Link to='/'>
                            <button type="Submit">Login</button>
                        </Link>
                    </form>
                </div>

            </div>
        );
    }
}


export default Login;