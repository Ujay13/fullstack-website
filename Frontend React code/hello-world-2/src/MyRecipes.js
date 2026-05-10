
// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Navbar from './Navbar';
// import axios from "axios";
// import './App.css';

// function getImageUrl(image) {
//   if (!image) return "";
//   if (image.startsWith("http")) return image;
//   return `http://localhost:8080/images/${image.replace(/^\/+/, '')}`;
// }

// function MyRecipes() {
//   const [recipes, setRecipes] = useState([]);
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const fetchRecipes = () => {
//     if (!token) return;
//     axios.get("http://localhost:8080/api/myrecipes", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setRecipes(Array.isArray(res.data) ? res.data : []))
//     .catch(err => {
//       console.error("Failed to fetch recipes", err);
//       setRecipes([]);
//     });
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const handleRecipeClick = async (recipeId) => {
//     try {
//       await axios.post(`http://localhost:8080/api/recipes/${recipeId}/increment`, {},
//         { headers: { Authorization: `Bearer ${token}` } });
//     } catch (err) {
//       // Optional: error handling
//     }
//     navigate(`/createdrecipe/${recipeId}`);
//   };

//   return (
//     <>
//       <div className="img">
//         <Navbar /><br /><br /><br />
//         <center><h2><b style={{ color: 'white' }}>My Recipes</b></h2></center>
//         <div className="MyRecipes">
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//               {recipes.length === 0 && (
//                 <p style={{ color: 'white' }}>You haven't created any recipes yet.</p>
//               )}
//               {recipes.map(recipe => (
//                 <div
//                   key={recipe.id}
//                   className="card MyRecipeCard position-relative"
//                   style={{ width: '350px', minHeight: '350px', padding: '15px', cursor: 'pointer' }}
//                   onClick={() => handleRecipeClick(recipe.id)}
//                 >
//                   <h5 style={{ fontWeight: 'bold', color: 'rgb(225,0,0)' }}>{recipe.title}</h5>
//                   {recipe.image && (
//                     <img
//                       src={getImageUrl(recipe.image)}
//                       alt={recipe.title}
//                       style={{ height: "230px", width: '220px', objectFit: 'cover', marginBottom: '10px', marginLeft: '45px' }}
//                     />
//                   )}
//                   <p className="card-text">
//                     <b style={{ color: 'rgb(225,0,0)' }}>Created By:</b>{" "}
//                     <b>{recipe.createdBy ? recipe.createdBy : "Unknown"}</b>
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <br />
//             <div style={{ marginTop: '20px' }}>
//               <Link to="/Create" className="btn btn-success">Create New Recipe</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MyRecipes;



import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import axios from "axios";
import './App.css';

function getImageUrl(image) {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `http://localhost:8080/images/${image.replace(/^\/+/, '')}`;
}

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchRecipes = () => {
    if (!token) return;
    axios.get("http://localhost:8080/api/myrecipes", {
      headers: { Authorization: `Bearer ${token}` }
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

  const handleRecipeClick = async (recipeId) => {
    try {
      await axios.post(`http://localhost:8080/api/recipes/${recipeId}/increment`, {},
        { headers: { Authorization: `Bearer ${token}` } });
    } catch (err) {
      // Optional: error handling
    }
    navigate(`/createdrecipe/${recipeId}`);
  };

  return (
    <>
      <div className="img">
        <Navbar /><br /><br /><br />
        <center><h2><b style={{ color: 'white' }}>My Recipes</b></h2></center>
        <div className="MyRecipes">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {recipes.length === 0 && (
                <p style={{ color: 'white' }}>You haven't created any recipes yet.</p>
              )}
              {recipes.map(recipe => (
                <div
                  key={recipe.id}
                  className="card cardm h-100 shadow-sm position-relative HomeCard" // class names as in Home card
                  style={{ cursor: 'pointer', width: '350px', minHeight: '350px', padding: '15px' }}
                  onClick={() => handleRecipeClick(recipe.id)}
                >
                  <h4 style={{ color: 'rgb(225,0,0)' }} className="card-title">{recipe.title}</h4>

                  {recipe.image && (
                    <img
                      src={getImageUrl(recipe.image)}
                      alt={recipe.title}
                      className="card-img-top"
                      style={{ height: "230px", width: '220px', marginLeft: '55px', objectFit: "cover" }} // matching Home styles
                    />
                  )}

                  <div className="card-body cardcontent">
                    <p className="card-text">
                      <b style={{ color: 'rgb(225,0,0)' }}>Created By:</b> <b>{recipe.createdBy ? recipe.createdBy : "Unknown"}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div style={{ marginTop: '20px' }}>
              <Link to="/Create" className="btn btn-success">Create New Recipe</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRecipes;
