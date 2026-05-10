import Nav from './Nav';
import './App.css';
import { useNavigate } from 'react-router-dom';
function Landing() {

     const navigate = useNavigate();
     
    return (
        <div id='food'>
           <Nav></Nav><br></br>
        <div className='para'>
           <h1>Welcome to Food Sharing Website</h1>
           <p>This website is about food sharing , to share recipe your and get it from others.</p>
           <p>Then lets get started.</p>
          <button className='buttons' onClick={() => navigate('/register')}>Get started</button>
        </div>
        </div>
    )
}
export default Landing;