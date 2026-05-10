import React from "react";
import { useState } from "react";

function Use() {
    var [input, setinput] = useState('');
    var give;
    
    function change(event) {
        setinput(event.target.value);
    }

    function but(event) {
        event.preventDefault();
         give = input;
    }    
    return(
        <div>
            <center>
                <hr></hr>
                <form onSubmit={but}>
                <label>Enter Your Name:</label><br></br>
                <input type="text" value={input} onChange={change} ></input><br></br>
                <label>Enter Your Age:  </label><br></br>
                <input type="number"></input><br></br>
                <label>Enter Your Address: </label>
                <input className="form-control textarea" style={{width:'500px',height:'50px' }} type="text"></input><br></br>
                <input type="submit">Submit</input>
               </form> <hr></hr>
            </center>

            <h2>Details</h2><br></br>
           <p>{give}</p>
           <h1>Hello</h1>

        </div>
    );
}
export default Use;