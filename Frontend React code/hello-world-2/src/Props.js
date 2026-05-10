import React from "react";
import Child from './child';

function Props() {
    
    var Name = 'Ujay';
    var Age = 21;
    
    return (

        <div>
            <Child Name = {Name} Age = {Age} >
            <p>Welcome to mashup stack</p> 
            </Child>
        </div>
    );
}

export default Props;