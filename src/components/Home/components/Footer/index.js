import React from "react";
import Foot from "./components/Foot";

class Footer extends React.Component{

    state={
        Footer:[{name:"ADDRESS:leftAddress: Plot No. 72 & 73,4th Floor, Akshay Tech Park, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066"}]
    };
render(){
    const {Footer}=this.state;
    return <div>{Footer.map(foo=>(<Foot name ={foo.name} />))}</div>;
}
}
export default Footer;