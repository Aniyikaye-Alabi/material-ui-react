import React, { useEffect } from 'react';

const FirstPage = () => {
    const arr = ["ad", "be", "cj"]

    useEffect(() => {
        console.log("use effect ran");
    });
    
    return (
        <div>
            <h1>Hello Welcome to My First Page</h1>
            {
                arr.map((each, index) => <li key={index}>{each}</li>)
            }
        </div>
    );
}
export default FirstPage;