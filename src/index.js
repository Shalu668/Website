import React from "react";
import ReactDom from "react-dom";
import App from "./App";


function Top() {
    return(
<div>
<App />
</div>
    ) ;   
}
    
const topDir = document.getElementById("root");
ReactDom.render(<Top />,topDir);
