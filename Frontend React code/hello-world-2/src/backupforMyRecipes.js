import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes created by the logged-in user
  const fetchRecipes = () => {
    const token = localStorage.getItem("token"); // get saved token after login

    axios.get("http://localhost:8080/api/myrecipes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Fetched user recipes:", response.data);
        if (Array.isArray(response.data)) {
          setRecipes(response.data);
        } else {
          setRecipes([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch recipes", err);
        setRecipes([]);
      });
  };

  // Delete a recipe
  const deleteRecipe = (id) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Are you sure you want to delete this recipe?")) {
      axios.delete(`http://localhost:8080/api/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          alert("Recipe deleted successfully!");
          fetchRecipes(); // Refresh after deletion
        })
        .catch((err) => {
          console.error("Failed to delete recipe", err);
          alert("Failed to delete recipe. Try again.");
        });
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      
      {recipes.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p>You haven't created any recipes yet.</p>
          <Link to="/create" className="btn btn-success">Create New Recipe</Link>
        </div>
      )}

      {recipes.map((recipe) => (
        <div key={recipe.id} className="card" style={{ width: '300px', minHeight: '350px', padding: '15px', position: 'relative' }}>
          <h5 style={{ fontWeight: 'bold' }}>{recipe.title}</h5>
          <p><b>Ingredients:</b> {recipe.incredients}</p>
          <p><b>Steps:</b> {recipe.steps}</p>
          <p><b>Time:</b> {recipe.cookingTime}</p>
          <p><b>Difficulty:</b> {recipe.difficultyLevel}</p>

          {recipe.image && (
            <img
              src={`http://localhost:8080/images/${recipe.image}`}
              alt={recipe.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Link to={`/edit/${recipe.id}`} className="btn btn-primary btn-sm">Edit</Link>
            <button onClick={() => deleteRecipe(recipe.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyRecipes;