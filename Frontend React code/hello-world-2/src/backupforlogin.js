import { useState } from "react";
import axios from "axios";
import './App.css';
import { useNavigate } from "react-router-dom";
function Login(){

    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    function attemptLogin(event) {

        event.preventDefault()

        axios.post('http://localhost:8080/api/login',{

            email:email,
            password:password

        }).then(response=>{
            setErrorMessage('');
            console.log(response.data.token);
            navigate('/Home');

        }).catch(error=>{
           
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){

                setErrorMessage(error.response.data.message)
            }else{

                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }

    return(
        <div>
            <div id="cards" className="card" >


            <div id="table">
                <div><h3 style={{marginLeft:'95px'}}><b className="card-title" >Login</b></h3></div>
                 {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
               <br></br>
            <form >
            <table >
                    
                <tbody>
                     <tr><td><label>Email</label></td></tr>   
                    <tr><td><input type="email" className="form-control place" value={email} onInput={(event)=>setEmail(event.target.value)}></input></td></tr> 
                    <tr><td><label>Password</label></td></tr>
                    <tr><td><input type="password" className="form-control place" value={password} onInput={(event)=>setPassword(event.target.value)}></input></td></tr>
                   
                  
                  
                </tbody>
                        
            </table> <br></br>
            <button className="button" type="submit" onClick={attemptLogin} >Login</button>
            </form>
            </div>
            </div> 
            </div> 
        
    )
}
export default Login;