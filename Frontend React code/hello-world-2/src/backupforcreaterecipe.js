import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Create() {
  const [createdBy, setCreatedBy] = useState("");
  const [title, setTitle] = useState("");
  const [incredients, setIncredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); 

      await axios.post("http://localhost:8080/api/recipecreate", {
        createdBy,
        title,
        incredients,
        steps,
        cookingTime,
        difficultyLevel,
        image
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Recipe created successfully!");
      setCreatedBy("");
      setTitle("");
      setIncredients("");
      setSteps("");
      setCookingTime("");
      setDifficultyLevel("");
      setImage("");

    } catch (err) {
      console.error("Error creating recipe:", err);
      alert("Failed to create recipe!");
    }
  };

  return (
    <div>
      <div id="cardt" className="card" style={{ width: "700px", height: "600px", padding: "20px" }}>
        <div id="table">
          <h3><b className="card-title">Create New Recipe</b></h3><br />

          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr><td><label>Uploader Name</label></td></tr>
                <tr><td><input type="text" className="form-control place"
                  value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} /></td></tr>

                <tr><td><label>Recipe Name</label></td></tr>
                <tr><td><input type="text" className="form-control place"
                  value={title} onChange={(e) => setTitle(e.target.value)} /></td></tr>

                <tr><td><label>Ingredients Required</label></td></tr>
                <tr><td><textarea className="form-control place" rows={3}
                  value={incredients} onChange={(e) => setIncredients(e.target.value)}></textarea></td></tr>

                <tr><td><label>Cooking Instructions</label></td></tr>
                <tr><td><textarea className="form-control place" rows={3}
                  value={steps} onChange={(e) => setSteps(e.target.value)}></textarea></td></tr>

                <tr><td><label>Estimated Time (minutes)</label></td></tr>
                <tr><td><input type="number" className="form-control place"
                  value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} /></td></tr>

                <tr><td><label>Difficulty Level</label></td></tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="difficulty" value="Easy"
                        checked={difficultyLevel === "Easy"}
                        onChange={(e) => setDifficultyLevel(e.target.value)} /> Easy
                    </label>&nbsp;&nbsp;

                    <label>
                      <input type="radio" name="difficulty" value="Medium"
                        checked={difficultyLevel === "Medium"}
                        onChange={(e) => setDifficultyLevel(e.target.value)} /> Medium
                    </label>&nbsp;&nbsp;

                    <label>
                      <input type="radio" name="difficulty" value="Hard"
                        checked={difficultyLevel === "Hard"}
                        onChange={(e) => setDifficultyLevel(e.target.value)} /> Hard
                    </label>
                  </td>
                </tr>

                <tr><td><label>Food Image URL</label></td></tr>
                <tr>
                  <td>
                    <input type="text" className="form-control place"
                      value={image} onChange={(e) => setImage(e.target.value)} />
                  </td>
                </tr>

                {/* 🔹 Image Preview */}
                {image && (
                  <tr>
                    <td style={{ textAlign: "center", paddingTop: "10px" }}>
                      <img src={image} alt="Preview" style={{ width: "200px", borderRadius: "10px" }} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <br />
            <button className="button" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;