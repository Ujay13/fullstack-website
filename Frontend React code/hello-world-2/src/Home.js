
import './App.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false); // Detects if the mobile nav is open
  const [views, setviews] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/api/Home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    
    fetchRecipes();
  }, []);

  const report = (recipeId) => {
  setviews(prevViews => ({
    ...prevViews,
    [recipeId]: (prevViews[recipeId] || 0) + 1
  }));
}

  // Filter recipes based on search
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Add nav-open class to allow responsive padding when mobile nav is expanded
    <div className={`home-page img${navOpen ? ' nav-open' : ''}`}>
      <Navbar setNavOpen={setNavOpen} />
      <div className="container text-center">
        {/* Search Bar */}
        <form className="d-flex justify-content-center my-4">
          <input
            type="search"
            id="search"
            className="form-control search-bar"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* Recipe Cards */}
        <div className="row g-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div className="col-md-4" key={recipe.id}>
                <div className="card cardm h-100 shadow-sm position-relative HomeCard" onClick={() => report(recipe.id)}>
                 <br></br> <h4 style={{ color: 'rgb(225,0,0)' }} className="card-title">{recipe.title}</h4>
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      className="card-img-top"
                      alt={recipe.title}
                      style={{ height: "230px", width: '220px', marginLeft: '76px', objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body cardcontent">
                    <p className="card-text" >
                      <b style={{ color: 'rgb(225,0,0)' }}>Created By:</b> <b>{recipe.createdBy ? recipe.createdBy : "Unknown"}</b>
                    </p>
                    <Link to={`/recipe/${recipe.id}`} className="stretched-link"></Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: 'white' }}>No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
