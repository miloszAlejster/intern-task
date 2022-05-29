import './App.css';
import Dot from "./Dot";
import React, { useState } from 'react';

function App() {
    const[idDotted, setDot] = useState();
    const hsetDot = (key) => {
        setDot(key);
    }
    return (
        <div className="dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot 
                    key={i}
                    id={i}
                    idDotted={idDotted}
                    hsetDot={hsetDot}
                />
            ))}
        </div>
    );
}

export default App;
