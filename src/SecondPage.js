import React from 'react';

const SecondPage = () => {
    const arr = ["ad", "be", "cj"]
    return (
        <div>
            <h1>Hello Welcome to My Second Page</h1>
            {
                arr.map((each, index) => <li key={index}>{each}</li>)
            }
        </div>
    );
}
export default SecondPage;