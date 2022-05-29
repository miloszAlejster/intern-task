import React from 'react';
import './Dot.css';

const Dot = ({id, idDotted, hsetDot}) => {
    const viewColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        document.documentElement.style.setProperty('--bg-color', randomColor);
    };
    const viewDot = () => {
        hsetDot(id);
    }
    const hClick = () =>{
        viewColor();
        viewDot();
    }
    const view_number = (id === idDotted) ? id+1 : null;
    const class_flag = (id === idDotted);
    return (
        <div className={class_flag ? "dotted" : "dot"} onClick={hClick}>
            <p>{view_number}</p>
        </div>
    );
};

export default Dot;
