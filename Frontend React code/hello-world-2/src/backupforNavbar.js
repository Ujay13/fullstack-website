import './App.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <div>
            <nav id="nav" className="navbar navbar-expand-sm ">
            <div className="navbar-brand">

                <h4>Food Recipe Sharing</h4>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-auto" id="navbarNav">

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                         <Link to="/Home" style={{color:'white', textDecoration:'none'}} >Home</Link>
                     </li>&nbsp;&nbsp;&nbsp;&nbsp;

                    <li className="nav-item">
                       <Link to="/login" style={{color:'white', textDecoration:'none'}} >Login</Link>
                    </li> &nbsp;&nbsp;&nbsp;&nbsp;

                    <li className="nav-item">
                        Register 
                    </li> &nbsp;&nbsp;&nbsp;&nbsp;
                            
                    <li className="nav-item">                               
                         <Link to="/Profile" style={{color:'white', textDecoration:'none'}} >Profile</Link>       
                    </li>  &nbsp;&nbsp; &nbsp;&nbsp;              
                        
                    <li className="nav-item">                              
                         <Link to="/MyRecipe" style={{color:'white', textDecoration:'none'}} >MyRecipe</Link>                           
                    </li> &nbsp;&nbsp;
                       
             
                </ul>

            </div>
        
        </nav>
        </div>
    )
}
export default Navbar;