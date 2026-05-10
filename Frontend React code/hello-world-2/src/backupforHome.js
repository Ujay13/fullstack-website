import './App.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <br />

      <div className="container text-center">
        {/* Search Bar */}
        <form className="d-flex justify-content-center my-4">
          <input
            type="search"
            id="search"
            className="form-control search-bar"
            placeholder="Search"
          />
        </form>

      <br></br>
        {/* Responsive Card Grid */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Eiffel Tower</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Big Ben</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Statue of Liberty</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of cards with spacing */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Colosseum</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Taj Mahal</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Great Wall</h4>
                <p className="card-text">Some text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
