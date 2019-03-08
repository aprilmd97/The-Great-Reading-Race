import React from "react";
import Smoke from "./smoke.svg";


function Footer () {
    return (
        <img src={Smoke} style={{position: "fixed", bottom: 0, zIndex:-1}} />
    );
}


export default Footer