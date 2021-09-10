import React, { useState, useEffect } from 'react';

const SecondPage = () => {
    const arr = ["ad", "be", "cj"]
    const [name, setName] = useState("mario");

    useEffect(() => {
        console.log("effect ran");
    }, [name]);

    let condName = (name === "mario") ? "fish" : "mario";
    return (
        <div>
            <h1>Hello Welcome to My Second Page</h1>
            {
                arr.map((each, index) => <li key={index}>{each}</li>)
            }
            <p>{name}</p>
            <button onClick={() => {setName(condName)}}>
            Toggle
            </button>
        </div>
    );
}
export default SecondPage;