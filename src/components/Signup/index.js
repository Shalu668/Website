import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./index.css";


class Signup extends React.Component {
    state = {
        formValidation: {
            firstname: null,
            lastname: null,
            emailid: null,
            newpassword: null
            // firstnameError:"firstname is empty",
            //lastnameError:"firstname is empty",
            //emailidError:"emaili is empty",
            //newpasswordError:"newpassword is empty"

        }

    };

    mainHandler = (value, key) => {
        const { formValidation } = this.state;
        this.setState({
            ...this.state,
            formValidation: { ...formValidation, [key]: value }

        });
    }

    /*  checkUser=()=>{
          const {formValidation}=this.state;
          var kkk=document.getElementById("user");
          if(kkk.length<5)
          {
              alert("NOT MATCH");
              return false;
          }
          else{
              
              return true;
          }
      }*/

    formHandler = (e) => {
        e.preventDefault()
        const { formValidation } = this.state;


        if (formValidation.firstname && formValidation.lastname && formValidation.emailid && formValidation.newpassword !== "") { alert("Success"); }
        else {
            alert("Must fill all fields");
        }
    }
    /* [key]={formValidation};
   // var message ="error";
     var email="shalu";
      var firstnam ="";
      var lastnam="";
      var pass="";
      
     // if(formValidation.emailid!== reg?"Email required":"");
      //var error={};
     // if((formValidation.emailid!==email?alert("Email not match"):"")||
     // if(formValidation.newpassword.length>=5?alert(""):alert("Password have short lenth"))
      
      if ((formValidation.firstname!==firstnam?alert("firstname not correct"):"")||
       (formValidation.lastname!==lastnam?alert("lastname not correct"):"")||
        (formValidation.emailid !==email?alert("Email not correct"):"")||
        (formValidation.newpassword!==pass?alert("password not correct"):"") || formValidation.firstname&&formValidation.lastname&&
        formValidation.emailid&&formValidation.newpassword)
        {
            alert("Success");
       }
        else
        {
            alert("Must fill all Fileds");
      }

  /*   var check =document.getElementById('sss').value;
     var element =document.getElementById("hh");
     if(check.length<5)
     {
         element.innerHTML="invalid firstname";
         element.style.color="red"
     }
     else{
      element.innerHTML="valid firstname";
      element.style.color="green"

     }

       }*/


    render() {
        const { formValidation } = this.state;
        const { firstname, lastname, emailid, newpassword } = formValidation;
        const { mainHandler } = this;
        return (
            <div>
                <div className="reg-style">
                    <form onSubmit={(e) => formValidation()}>
                        <h1>REGISTRATION</h1><br />
                        <label>FirstName:</label>
                        <input id="user" pattern="(shalu)" title="Must contain firstname "
                            onChange={e => {
                                mainHandler(e.target.value, "firstname");
                            }}
                            value={firstname}
                            placeholder="Enter FirstName" required></input>

                        <br />
                        <br />
                        <label>LastName:</label>
                        <input pattern="(rani)" title="Must contain lastname "
                            onChange={e => {
                                mainHandler(e.target.value, "lastname");
                            }}
                            value={lastname}
                            placeholder="Enter LastName" required></input>
                        <br />
                        <br />
                        <label>EmailId:</label>
                        <input pattern="(shalu@123)" title="Must contain email"

                            onChange={e => {
                                mainHandler(e.target.value, "emailid");
                            }}
                            value={emailid}
                            placeholder="Enter EmailId" required></input>
                        <br />
                        <br />
                        <label>NewPassword:</label>
                        <input pattern="(shalu)" title="Must contain password "
                            onChange={e => {
                                mainHandler(e.target.value, "newpassword");
                            }}
                            value={newpassword}
                            placeholder="Enter password" required></input>
                        <br />
                        <br />
                        <label>Gender:</label><b /><b />
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                        <input type="radio" name="gender" value="other"/> Other
                        <br />
                         <br />
                         <label>DOB:</label><b />
                         <input type="date"></input>
                         
                        <button onClick={this.formHandler}>Signup</button>

                    </form>


                </div>
            </div>)

    }
}

export default Signup;