import React from "react";

function Layout(props) {
    return (
        <div className="bc">
            {props.children}
        </div>
    )
}

export default Layout;