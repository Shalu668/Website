import React from "react";
import Technology from "./components/Technology";


class Technologies extends React.Component{
state = {
technologies: [
    {name:"reactjs"},{name:"nodejs"},{name:"firebase"}
]

} 
render() {
    const {technologies} = this.state;
    return(
        <div style={{
            display:"flex",
            
            alignItems:"center",
            justifyContent:"center"
            
        }}>   
             {technologies.map(tech => (
          <Technology name={tech.name} />
        ))}
        </div>
    );
}

}

export default Technologies ;