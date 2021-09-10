import React from 'react';

const ThirdPage = () => {
    const arr = ["ad", "be", "cj"]
    return (
        <div>
            <h1>Hello Welcome to My Third Page</h1>
            {
                arr.map((each, index) => <li key={index}>{each}</li>)
            }
        </div>
    );
}
export default ThirdPage;