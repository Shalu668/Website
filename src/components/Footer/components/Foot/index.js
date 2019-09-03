import React from "react";
import "./index.css";

class Foot extends React.Component{
    render()
    {
        const {name}= this.props;
        return <div className="fo">{name}</div>
    }
}

export default Foot;