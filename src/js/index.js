import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");

function Index() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}


ReactDOM.render(<Index />, app);

