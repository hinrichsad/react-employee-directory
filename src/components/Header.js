import React from "react";
import logo from "../utils/logo.png"

function Header() {
    return (
        <div className="head">
            <img src={logo} alt="logo" className="logo"></img>
            <h1 className="title">Employee Directory</h1>
            <p className="code-link"><a href="https://github.com/hinrichsad/react-employee-directory" target="_blank">code</a></p>
        </div>
    )
}

export default Header;