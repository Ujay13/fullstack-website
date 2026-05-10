import './App.css';
import Navbar from './Navbar';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div >
      <Navbar /><br></br>
      <div className='container'>
      <form>
        <input type='search' id='search' placeholder='search'></input>
      </form>
      <br></br>
      


      <div className="card homecard1" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>
    

      <div className="card homecard2" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>
      <br />

      <div className="card homecard3" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>
      <br />

      <div className="card homecard4" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>

      <div className="card homecard5" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>

      <div className="card homecard6" style={{ width: "350px", height: "350px" }}>
        {/*}<Link to="/paris" className="stretched-link">
          <img
            src="https://via.placeholder.com/400x300"
            className="card-img-top"
            alt="Eiffel Tower"
          />
        </Link>{*/}
        <div className="card-body">
          <h4 className="card-title">Eiffel Tower</h4>
          <p className="card-text">Some text</p>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;



.homecard1,.homecard2,.homecard3,.homecard4{
  position: absolute;
  top: 570px;
  margin: 60px;
}
.homecard1{
  left: 20px;
}
.homecard2{
  position: absolute;
  left: 530px;
}
#search{
  width: 370px;
  height: 34px;
  position: absolute;
  top: 130px;
  left: 555px;
  justify-content: center;

}
.homecard3{
  position: absolute;
  left: 1030px;
}
.homecard4{
  top: 1050px;
  left: 20px;
}
.homecard5{
  top: 952px;
  left: 385px;
}
.homecard6{

  top: 603px;
  left: 885px;
}













{//}orginal css{//}

    

#cards{

  width: 500px;
  height: 400px;
  position: absolute;
  left: 32%;
  top: 142px;

  border: 1px;
  box-shadow: 0 0px 14px rgba(54, 49, 49, 0.98);
  border-radius: 10px;

}

#table{
  position: inherit;
  left: 100px;
  top: 35px;
}

.place{
  width: 300px;
}

button{
    width: 200px;
    height: 50px;
}


.button{
  background-color: red;
  
  color: white;
  width: 240px;
  height: 42px;
  border-radius: 7px;
  position: relative;
  left: 33px;
  border: 0px;
}
.button:hover{
  border: 2px solid;
  border-color: black;
}

.button:active{
  transform: scale(1.02);
  background-color: rgb(244, 140, 140);
}
#view{
  width: 200px;
  height: 50px;
}
#card{
  position: absolute;
  left: 32%;
  top: 60px;

  border: 1px;
  box-shadow: 0 0px 14px rgba(54, 49, 49, 0.98);
  border-radius: 10px;

}

#cardt{
  position: absolute;
  left: 26%;
  top: 40px;

  border: 1px;
  box-shadow: 0 0px 14px rgba(54, 49, 49, 0.98);
  border-radius: 10px;

}

#login{
  margin-left: 135px;
}

h3{
  margin-left: 50px;
}
#nav{
  top: 0;
  left: 0;
  width: 100%;
  background-color: red;
  color: white;  
}
.Back{
    width: 160px;
    height: 40px;
    border-radius: 10px;
    border: 0px;
    background-color: red;
    color: white;
}
#food{
  background-image: url('/src/images/recipe\ landing\ page\ image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  color: white;

}

#nav1{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  color: white ;
  
}
.navbutton{
  border: 2px;
  background-color: white;
}
.para{
  position: absolute;
  top: 200px;
  left: 60px;
}
.buttons{
  background-color:rgba(230, 17, 17, 0.900);
  color: white;
  width: 200px;
  height: 42px;
  border-radius: 7px;
  position: relative;
  left: 28px;
  border: 0px;
}

/* Background for Home page (not Navbar) */
.home-page {
  background-color: #F7C6C7;
  min-height: 100vh;
  padding-bottom: 50px;
}

/* Search bar styles */
.search-bar {
  width: 370px;
  height: 40px;
  text-align: center; /* Center placeholder text */
  border-radius: 20px;
  border: 2px solid #ccc;
}

/* Carousel text styles */
.carousel-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
}

.carousel-text {
  font-size: 1.2rem;
  color: #444;
}

/* Make carousel buttons smaller */
.carousel-control-prev.small-btn,
.carousel-control-next.small-btn {
  width: 30px;      /* smaller width */
  height: 30px;     /* smaller height */
  top: 50%;         /* vertically center */
  transform: translateY(-50%);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 50% 50%; /* shrink the arrow inside */
}

/* Card styles */
.card {
  min-height: 400px; /* keep your taller cards */
  border: 1px solid #ccc;
  box-shadow: 0 0px 14px rgba(54, 49, 49, 0.98);
  border-radius: 10px;
  overflow: hidden;

}
.col,
.col-md-4 {
  margin-bottom: 20px;
}

/* Card image fix */
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}


@media screen and (max-width: 768px) {
  #cards {
    margin: 50px 10px; /* more top/bottom space on mobile */
    padding: 15px;
  }

  .button {
    max-width: 100%;
  }

  .place {
    width: 100%;
  }
}