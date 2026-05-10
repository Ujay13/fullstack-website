
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./App.css";

function getImageUrl(image) {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `http://localhost:8080/images/${image.replace(/^\/+/, '')}`;
}

function CreatedRecipe() {
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchRecipes = () => {
    if (!token) return;
    axios.get("http://localhost:8080/api/myrecipes", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setRecipes(Array.isArray(res.data) ? res.data : []))
    .catch(err => {
      console.error("Failed to fetch recipes", err);
      setRecipes([]);
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const deleteRecipe = (id) => {
    if (!token) return;
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    axios.delete(`http://localhost:8080/api/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => fetchRecipes())
    .catch(() => alert("Failed to delete recipe. Try again."));
  };

  return (
    <div className="recipe-detail-page img">
      <Navbar /><br />
      <div className="container my-5">
        <button className="back mb-3" onClick={() => navigate("/MyRecipe")}>⬅ Back</button><br /><br /><br />
        <div className="row justify-content-center g-4">
          {recipes.length === 0 && (
            <p><b style={{ color: "white" }}>No recipes found.</b></p>
          )}
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="card shadow-lg RecipeDetailCard p-3 mb-4"
              style={{ width: "850px", margin: "auto" }}
            >
              {recipe.image && (
                <img
                  src={getImageUrl(recipe.image)}
                  alt={recipe.title}
                  className="card-img-top rounded mb-3"
                  style={{ height: "470px", width: "450px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h2 style={{ color: "rgb(225,0,0)" }}>
                  <b>{recipe.title}</b>
                </h2>
                <p><b style={{ color: "rgb(225,0,0)" }}>Created By: </b>{recipe.createdBy || "Unknown"}</p>
                <hr />
                <div className="section">
                  <div className="section-label">Ingredients</div>
                  <div className="section-box">{recipe.incredients}</div>
                </div>
                <div className="section">
                  <div className="section-label">Steps</div>
                  <div className="section-box">
                    {recipe.steps?.split(",").map((step, idx) => (
                      <p key={idx}>{step.trim()}</p>
                    ))}
                  </div>
                </div>
                <h5 style={{ color: "rgb(225,0,0)" }}>Cooking Time</h5>
                <p>{recipe.cookingTime} </p>
                <h5 style={{ color: "rgb(225,0,0)" }}>Difficulty</h5>
                <p>{recipe.difficultyLevel}</p>
                <div className="text-center mt-4">
                  <button className="editbtn me-3" onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>&nbsp;&nbsp;
                  <button className="deletebtn" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatedRecipe;
