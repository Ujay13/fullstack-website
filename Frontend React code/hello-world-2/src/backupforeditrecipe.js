import './App.css';

function Edit() {
  return (
    <div>
      <div id="cardt" className="card" style={{ width: "700px", height: "800px" }}>
        <div id="table">
          <h3><b className="card-title">Edit Recipe</b></h3><br></br>
        

          <form>
            <table>
              <tbody>
               
                <tr><td><label>Uploader Name</label></td></tr>
                <tr><td><input type="text" className="form-control place" /></td></tr>

                
                <tr><td><label>Recipe Name</label></td></tr>
                <tr><td><input type="text" className="form-control place" /></td></tr>

                
                <tr><td><label>Ingredients Required</label></td></tr>
                <tr><td><textarea className="form-control place" rows={3}></textarea></td></tr>

               
                <tr><td><label>Cooking Instructions</label></td></tr>
                <tr><td><textarea className="form-control place" rows={3}></textarea></td></tr>

                
                <tr><td><label>Estimated Time</label></td></tr>
                <tr><td><input type="time" className="form-control place" /></td></tr>

                
                <tr><td><label>Difficulty Level</label></td></tr>
                <tr>
                  <td>
                    <label>
                      <input type="radio" name="difficulty" value="Easy" /> Easy
                    </label>&nbsp;&nbsp;
                  
                    <label>
                      <input type="radio" name="difficulty" value="Medium" /> Medium
                    </label>&nbsp;&nbsp;
                  
                    <label>
                      <input type="radio" name="difficulty" value="Hard" /> Hard
                    </label>&nbsp;&nbsp;
                  </td>
                </tr>
                <tr><td><label>Upload Image of Food</label></td></tr>
                <tr><td><input type="file" className="form-control place" /></td></tr>
              </tbody>
            </table>

            <br />
            <button className="button" type="submit">Save</button>
          </form>
        </div>
      </div>

      <br></br>

      <button className='Back' style={{marginleft: '10px', top: '20px'}}>Back</button>
      
    </div>
  );
}

export default Edit;
