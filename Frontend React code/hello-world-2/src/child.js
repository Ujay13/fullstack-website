import React from 'react';

function Child(props){
    
    return(
        <div>
            <p> Name : {props.Name} </p>
            <p> Age : {props.Age} </p>
            <p> {props.children} </p>
        
        </div>
    );
}


export default Child;