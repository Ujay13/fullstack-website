import { useState, useEffect} from 'react';
import image from "./images/ghoul.jpeg";
import './App.css';

function App() {
  const [count, setCount] = useState(Number);
  const [bgcolor, setcolor] = useState({ 'backgroundColor': 'white' });
  
  useEffect(() =>{
     
    if (count===0) {
      setcolor({ 'backgroundColor': 'red' });
    }
     else if (count<6){
      setcolor({ 'backgroundColor': 'yellow' });
    }
    else if (count>5){
      setcolor({ 'backgroundColor': 'green' });
    }
   else{
    setcolor({'backgroundColor': 'white' });
   }
  }, [count]);
      
  
  function Like() {
    setCount(count + 1);
    
  }

  function Dislike() {
    
    if (count<=0) {
      setCount(0);
    }
     else {
      setCount( count-1);
    }
      
  }

  function Reset() {
    setCount(0);
    
  }





  return (
    <div id='div' style={bgcolor} >
      <div id='A' className="card change"  style={ {width: "320px",height:"570px"}}>

        <h5><b className='card-title'>Tokyo Ghoul</b></h5>

        <img className='card-img-top' src={image} style={{ width: "300px", height: "380px" }} alt='tokyo' />
        <br></br>

        <b id='one'  style={{ color: 'red' }} >
           &nbsp; <i className="fas fa-heart" style={{ marginRight: '20px' }}> {count} </i> 
           
        </b>

        <hr />
        
        <div className='card-body'>

          <button className='btn' onClick={Like} style={{ marginRight: '10px' }}>
            <i className="fas fa-heart"></i> Like
          </button>

          <button className='btn' onClick={Dislike} style={{ marginRight: '10px' }} >
            <i className='fas fa-heart-broken'></i> Dislike
          </button>

          <button className='btn' onClick={Reset}>
           <i className='fas fa-redo'></i> Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
