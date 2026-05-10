
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./App.css";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/recipedetailview/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecipe(response.data);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Failed to load recipe details");
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) {
    return (
      <div className="container text-center mt-5">
        <p className="text-danger">{error}</p>
        <Link to="/Home" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container text-center mt-5">
        <p>Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page img">
      <Navbar />
      <br />
      <div className="container my-5">
        <div className="card shadow-lg RecipeDetailCard">
          {/* Recipe Image */}
          {recipe.image && (
            <img
              src={recipe.image}
              className="card-img-top recipe-detail-img"
              alt={recipe.title}
            />
          )}

          <div className="card-body">
            <h2 style={{ color: "rgb(225,0,0)" }} className="card-title">
              <b>{recipe.title}</b>
            </h2>

            <p className="text">
              <b style={{ color: "rgb(225,0,0)" }}>Created By: </b>
              <b>{recipe.createdBy || "Unknown"}</b>
            </p>

            <hr />

            <div className="section">
              <div className="section-label">Ingredients</div>
              <div className="section-box">{recipe.incredients}</div>
            </div>

            <div className="section">
              <div className="section-label">Steps</div>
              <div className="section-box">{recipe.steps}</div>
            </div>

            <h5 style={{ color: "rgb(225,0,0)" }}>
              <b>Cooking Time</b>
            </h5>
            <p>
              {recipe.cookingTime}&nbsp;
            </p>

            <h5 style={{ color: "rgb(225,0,0)" }}>
              <b>Difficulty</b>
            </h5>
            <p>{recipe.difficultyLevel}</p>
          </div>

          <div className="text-center">
            <button
              className="button"
              onClick={() => navigate("/Home")}
              type="submit"
            >
              ⬅ Back to Home
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;




// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar";
// import "./App.css";

// function RecipeDetail() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const incrementAndFetchRecipe = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         // Get the viewed recipes from localStorage or initialize as empty array
//         const viewedRecipes = JSON.parse(localStorage.getItem("viewedRecipes") || "[]");

//         // If recipe ID not viewed yet, increment views and update localStorage
//         if (!viewedRecipes.includes(id)) {
//           await axios.post(
//             `http://localhost:8080/api/recipes/${id}/incrementView`, // Adjust API as needed
//             null,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );
//           viewedRecipes.push(id);
//           localStorage.setItem("viewedRecipes", JSON.stringify(viewedRecipes));
//         }

//         // Fetch the recipe details including updated views count
//         const response = await axios.get(
//           `http://localhost:8080/api/recipedetailview/${id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setRecipe(response.data);
//       } catch (err) {
//         console.error("Error fetching recipe details:", err);
//         setError("Failed to load recipe details");
//       }
//     };

//     incrementAndFetchRecipe();
//   }, [id]);

//   if (error) {
//     return (
//       <div className="container text-center mt-5">
//         <p className="text-danger">{error}</p>
//         <Link to="/Home" className="btn btn-primary mt-3">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   if (!recipe) {
//     return (
//       <div className="container text-center mt-5">
//         <p>Loading recipe details...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="recipe-detail-page img">
//       <Navbar />
//       <br />
//       <div className="container my-5">
//         <div className="card shadow-lg RecipeDetailCard">
//           {recipe.image && (
//             <img
//               src={recipe.image}
//               className="card-img-top recipe-detail-img"
//               alt={recipe.title}
//             />
//           )}
//           <div className="card-body">
//             <h2 style={{ color: "rgb(225,0,0)" }} className="card-title">
//               <b>{recipe.title}</b>
//             </h2>
//             <p className="text">
//               <b style={{ color: "rgb(225,0,0)" }}>Created By: </b>
//               <b>{recipe.createdBy || "Unknown"}</b>
//             </p>
//             <p className="text">
//               <b style={{ color: "rgb(225,0,0)" }}>Views: </b>
//               <b>{recipe.views || 0}</b>
//             </p>
//             <hr />
//             <div className="section">
//               <div className="section-label">Ingredients</div>
//               <div className="section-box">{recipe.incredients}</div>
//             </div>
//             <div className="section">
//               <div className="section-label">Steps</div>
//               <div className="section-box">{recipe.steps}</div>
//             </div>
//             <h5 style={{ color: "rgb(225,0,0)" }}>
//               <b>Cooking Time</b>
//             </h5>
//             <p>
//               {recipe.cookingTime}
//             </p>
//             <h5 style={{ color: "rgb(225,0,0)" }}>
//               <b>Difficulty</b>
//             </h5>
//             <p>{recipe.difficultyLevel}</p>
//           </div>
//           <div className="text-center">
//             <button
//               className="button"
//               onClick={() => navigate("/Home")}
//               type="submit"
//             >
//               ⬅ Back to Home
//             </button>
//           </div>
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetail;
