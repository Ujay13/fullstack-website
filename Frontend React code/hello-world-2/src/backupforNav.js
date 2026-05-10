import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav id="nav1" className="navbar navbar-expand-sm" style={{ color: 'white' }}>
                <div className="navbar-brand">
                    <h4>Food Recipe Sharing</h4>
                </div>

                <button className="navbar-toggler navbutton" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      
                        <li className="nav-item">
                            <Link to="/login" style={{color:'white', textDecoration:'none'}} >Login</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;

                        <li className="nav-item">
                            <Link to="/register" style={{color:'white', textDecoration:'none'}} >Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav;