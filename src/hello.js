import React from 'react';


function Hello(){
    const Hello = () =>{
        console.log("hello");
    };
    return(
        <div>
            <h4>Hello World</h4>
            <button onClick={Hello}>Click</button>
        </div>
    )
}

export default Hello;