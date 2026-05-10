import './App.css';
function Recipeview(){


    return(
        <div className='img'>
            <div id="cardu" className="card content" style={{height:'550px'}} >
                <br></br>
                
                <div className="card-title"><h2 id='h'>Biriyani</h2></div><br></br>

                <div className='cardcontent'>
                <b>Image</b><br></br>
                <label>Ingredients: </label>
                <div className="card-content">
                    <ul>
                        <li>2 cups basmati rice (soaked for 30 minutes)</li>
                            <li>500 g chicken (cut into medium pieces)</li>

                           <li> 2 large onions (thinly sliced)</li>

                           <li> 2 tomatoes (chopped)</li>

                           <li> ½ cup plain yogurt</li>

                            <li>2 tbsp ginger-garlic paste</li>

                            <li>3-4 green chilies (slit)</li>

                           <li> ¼ cup cooking oil or ghee</li>

                            <li>1 tbsp lemon juice</li>

                            <li>Fresh coriander leaves (chopped) - ½ cup</li>

                           <li>Fresh mint leaves (chopped) - ½ cup</li>
                    </ul>
                    <b>Spices</b>

                    <ul>
                        <li>2 bay leaves</li>
                            <li>4 green cardamoms</li>

                           <li> 4 cloves</li>

                           <li> 1 cinnamon stick</li>

                           <li>1 star anise </li>

                            <li>1 tsp cumin seeds</li>

                            <li>2 tsp red chili powder</li>

                           <li>1 tsp turmeric powder </li>

                            <li>2 tsp garam masala or biryani masala</li>

                            <li>Salt to taste</li>

                    </ul>

                    <label>Instructions</label><br></br>
                    <ul>
                        <b>Cook the Rice:</b>
                        <li>Boil water with salt and a few whole spices (bay leaf, cloves, cardamom, cinnamon).</li>

                        <li>Add soaked rice and cook until 70% done. Drain and keep aside.</li>
                    </ul>

                    <ul>
                        <b>Prepare Chicken Masala:</b>
                        <li>Heat oil/ghee in a deep pan. Fry onions until golden brown (keep some aside for garnishing).</li>

                        <li>Add ginger-garlic paste, green chilies, and sauté.</li>

                        <li>Add chicken pieces, turmeric, red chili powder, salt, and cook until chicken is half done.</li>

                        <li>Mix in tomatoes, yogurt, mint, coriander, and garam masala. Cook until chicken is tender and masala is thick.</li>
                    </ul>

                    <ul>
                        <b>Layer the Biryani:</b>
                        <li>In a heavy-bottom pan, spread half the cooked chicken masala.</li>

                        <li>Add half of the rice on top.</li>

                        <li>Sprinkle fried onions, mint, coriander, and a little lemon juice.</li>

                        <li>Repeat with the remaining chicken and rice.</li>
                    </ul>

                    <ul>
                        <b>Dum Cooking (Steam):</b>

                        <li>Cover tightly (use a lid or seal with dough).</li>

                        <li>Cook on very low flame for 20-25 minutes so flavors infuse.</li>
                    </ul>

                    <ul>
                        <b>Serve:</b>
                        <li>Gently mix layers before serving.</li>

                        <li>Serve hot with raita or salad.</li>
                    </ul>

                    <label>Cooking Time: </label>
                    <p>~1 hour 30 minutes</p>
                    <label>Difficulty Level: </label>
                    <p>Medium</p>

                </div>
            
            <button className="buttont" type="submit" >Edit</button>  <button className="buttont" type="submit" >Delete</button><br></br>
            </div>
        
            </div>
            </div> 
            
        
    )
}
export default Recipeview;