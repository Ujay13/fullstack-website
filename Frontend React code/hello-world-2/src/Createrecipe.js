
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Create() {
  const navigate = useNavigate();

  const [createdBy, setCreatedBy] = useState("");
  const [title, setTitle] = useState("");
  const [incredients, setIncredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("⚠️ User not logged in.");
        return;
      }

      await axios.post(
        "http://localhost:8080/api/recipecreate",
        { createdBy, title, incredients, steps, cookingTime, difficultyLevel, image },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("✅ Recipe created successfully!");
      setCreatedBy("");
      setTitle("");
      setIncredients("");
      setSteps("");
      setCookingTime("");
      setDifficultyLevel("");
      setImage("");
    } catch (err) {
      console.error("Error creating recipe:", err);
      if (err.response && err.response.data) {
        setMessage("❌ " + (err.response.data.message || "Failed to create recipe"));
      } else {
        setMessage("❌ Server not responding. Try again later.");
      }
    }
  };

  return (
    <div className="img d-flex flex-column align-items-center min-vh-100">
      <Navbar />
      <div className="create-card shadow-lg">
        <h2 className="text-center text-danger fw-bold mb-3" style={{color:'rgb(225,0,0)'}}><b>Create a New Recipe</b></h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold"><b style={{color:'rgb(225,0,0)'}}>Uploader Name</b></label>
            <input
              type="text"
              className="form-control place"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold"><b style={{color:'rgb(225,0,0)'}}>Recipe Name</b></label>
            <input
              type="text"
              className="form-control place"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="section">
            <div className="section-label"><b style={{color:'rgb(225,0,0)'}}>Ingredients Required</b></div>
            <div className="section-box">
              <textarea
                className="form-control"
                rows={4}
                value={incredients}
                onChange={(e) => setIncredients(e.target.value)}
                placeholder="Enter ingredients here..."
                required
              ></textarea>
            </div>
          </div>

          <div className="section">
            <div className="section-label"><b style={{color:'rgb(225,0,0)'}}>Cooking Instructions</b></div>
            <div className="section-box">
              <textarea
                className="form-control"
                rows={6}
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter cooking steps here..."
                required
              ></textarea>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold"><b style={{color:'rgb(225,0,0)'}}>Estimated Time (in minutes)</b> </label>
            <input
              type="text"
              className="form-control place"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold"><b style={{color:'rgb(225,0,0)'}}>Difficulty Level</b></label>
            <div className="difficulty-options">
              {["Easy", "Medium", "Hard"].map((level) => (
                <label key={level} className="me-3">
                  <input
                    type="radio"
                    name="difficulty"
                    value={level}
                    checked={difficultyLevel === level}
                    onChange={(e) => setDifficultyLevel(e.target.value)}
                    required
                  />{" "}
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold"><b style={{color:'rgb(225,0,0)'}}>Food Image URL</b></label>
            <input
              type="text"
              className="form-control place"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL..."
            />
          </div>

          {image && (
            <div className="text-center mb-4">
              <img
                src={image}
                alt="Preview"
                className="create-img-preview"
              />
            </div>
          )}

          <div className="text-center">
            <button className="button  mb-3" style={{width:'300px',marginRight:"50px"}} type="submit">
              Create Recipe
            </button>
          </div>

          {message && (
            <p
              style={{
                color: message.includes("✅") ? "green" : "red",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      <div className="text-center mt-3 mb-5">
        <button className="Back"  onClick={() => navigate("/MyRecipe")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Create;
