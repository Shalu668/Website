import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Link } from "react-router-dom";


function Top() {
    return (

        <div className="sec">
            <Router>
                <App />
            </Router>
        </div>

    );
}

const topDir = document.getElementById("root");
ReactDom.render(<Top />, topDir);
