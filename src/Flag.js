import React from 'react';
import './App.css';

function Flag(props) {
    return (
        <img
            src={require("./images/flags/" + props.country + ".png")}
            className="flag"
            alt={props.country}>
        </img>
    );
}

export default Flag;
