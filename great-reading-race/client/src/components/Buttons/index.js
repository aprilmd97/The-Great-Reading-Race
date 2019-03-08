import React from "react";
import "./style.css";



function Button({ children }) {

    const text = {
        color: "white",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bolder"
    }

    const soundEffect = () => {
        const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/17575/click.mp3');
        audio.volume = .3;
        audio.play();
    };

    return (
        <a className="button-3d" style={text} onClick={soundEffect}>{children}</a>
    );
}

export default Button


