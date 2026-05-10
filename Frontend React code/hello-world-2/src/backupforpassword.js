import './App.css';
function Password(){


    return(
        <div>
            <div id="cards" className="card" >


            <div id="table">
                <h3><b  className="card-title"  >Change Password</b></h3>
               <br></br>
            <form >
            <table >
                    
                <tbody>
                     <tr><td><label>Current Password</label></td></tr>   
                    <tr><td><input type="email" className="form-control place"   ></input></td></tr> 
                    <tr><td><label>Confrim Password</label></td></tr>
                    <tr><td><input type="password" className="form-control place"  ></input></td></tr>
                   
                  
                  
                </tbody>
                        
            </table> <br></br>
            <button className="button" type="submit" >Save</button>
            </form>
            </div>
            </div> 

            <br></br>

            <button className='Back' style={{marginleft: '10px', top: '20px'}}>Back</button>
            </div> 
        
    )
}
export default Password;