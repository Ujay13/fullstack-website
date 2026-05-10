
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    incredients: '',
    steps: '',
    cookingTime: '',
    difficultyLevel: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/recipeedit/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setRecipe(res.data))
      .catch(() => alert('Failed to load recipe details.'));
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/recipeedit/${id}`, recipe, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      alert('Recipe updated successfully!');
      navigate(`/CreatedRecipe/${id}`);
    }).catch(() => {
      alert('Failed to update recipe.');
    });
  };

  return (
    <div className='img'>
    <div className="container my-4">
      <button className="back mb-3" onClick={() => navigate('/MyRecipe')}>Back</button><br></br><br></br><br></br>
      {/* Responsive grid for the card */}
      <div className="row justify-content-center">
        <div className="card EditCard p-3 mb-4"
              style={{ width: "850px", margin: "auto" }}>
          <h3 className="card-title text-center mb-4"><b style={{color:'rgb(225,0,0)'}}>Edit Recipe</b></h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="titleInput" className="form-label"><b style={{color:'rgb(225,0,0)'}}>Recipe Name</b></label>
              <input
                id="titleInput"
                type="text"
                className="form-control"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredientsInput" className="form-label"><b style={{color:'rgb(225,0,0)'}}>Ingredients Required</b></label>
              <textarea
                id="ingredientsInput"
                className="form-control"
                rows={3}
                name="incredients"
                value={recipe.incredients}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="stepsInput" className="form-label"><b style={{color:'rgb(225,0,0)'}}>Cooking Instructions</b></label>
              <textarea
                id="stepsInput"
                className="form-control"
                rows={3}
                name="steps"
                value={recipe.steps}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="timeInput" className="form-label"><b style={{color:'rgb(225,0,0)'}}>Estimated Time</b></label>
              <input
                id="timeInput"
                type="text"
                className="form-control"
                name="cookingTime"
                min="1"
                value={recipe.cookingTime}
                onChange={handleChange}
                required />
            </div>
            <fieldset className="mb-3">
              <label><b style={{color:'rgb(225,0,0)'}}>Difficulty Level</b></label>
              {["Easy", "Medium", "Hard"].map((level) => (
                <div key={level} className="form-check form-check-inline">
                  <input
                    id={`${level.toLowerCase()}Radio`}
                    type="radio"
                    name="difficultyLevel"
                    value={level}
                    checked={recipe.difficultyLevel === level}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor={`${level.toLowerCase()}Radio`} className="form-check-label">{level}</label>
                </div>
              ))}
            </fieldset>
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label"><b style={{color:'rgb(225,0,0)'}}>Food Image URL</b></label>
              <input
                id="imageInput"
                type="text"
                className="form-control"
                name="image"
                value={recipe.image}
                onChange={handleChange}
              />
            </div>
            {recipe.image && (
              <div className="text-center mb-3">
                <img
                  src={recipe.image}
                  alt="Preview"
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            )}
            {/* Save button gets your color from .button class in App.css */}
             <div className="text-center mt-4">
            <button className="button" style={{width:'280px',marginRight:'30px'}} type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Edit;


