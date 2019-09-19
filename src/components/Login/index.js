import React from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Login extends React.Component {

    state = {
        defaultCredential: {
            username: "shalu",
            password: "shalu@123"
        },
        userCredential: {
            username: null,
            password: null
        }
    };

    mainHandler = (value, key) => {
        const { userCredential } = this.state;
        this.setState({
            ...this.state,
            userCredential: { ...userCredential, [key]: value }

        });
    }

    formHandle = () => {
        const { defaultCredential, userCredential } = this.state;
        console.log(this.props);
        const {history}=this.props;

        if 
            ((defaultCredential.username == userCredential.username)&& (defaultCredential.password==userCredential.password))
         {
             if(true)
         { 
             alert("correct"); 
         }
             history.push("/dashboard");
            }
        else 
        {
             alert("not correct"); 
            }

            


    }

    render() {
        const { userCredential } = this.state;
        const { username, password } = userCredential;
        const { mainHandler } = this;
        return (
            <div>
                <div className="log-style">
                    <form>
                        <label for="uname">UserName:</label>
                        <input onChange={e => {
                            mainHandler(e.target.value, "username");
                        }}
                            value={username}

                            placeholder="Enter Username" name="uname"></input>
                        <br /><br />
                        <label for="psw">Password:</label>
                        <input onChange={e => {
                            mainHandler(e.target.value, "password");

                        }}
                            value={password} type="password" placeholder="Enter Password" name="psw"></input>

                        <br /> <br />
                         
                        <button onClick={this.formHandle} type="Submit">Login</button>
                    
                    </form>
                </div>

            </div>
        );
    }
}


export default Login;