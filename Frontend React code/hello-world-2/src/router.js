import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Login from "./login";
import Register from "./Register";
import Create from "./Createrecipe";
import Edit from "./Editrecipe";
import Password from "./Password";
import Home from "./Home";
import Recipeview from "./Recipeview";
import RecipeDetail from "./RecipeDetail";
import MyRecipes from "./MyRecipes";
import Profile from "./Profile";
import CreatedRecipe from "./CreatedRecipe";

const router = createBrowserRouter([
    { path: '/', element: <Landing/> },
    { path: '/login', element: <Login/> },
    { path: '/Register', element: <Register/> },
    { path: '/Home', element: <Home/> },
    { path: '/Create', element: <Create/> },
    { path: '/edit/:id', element: <Edit/> },   // ✅ Use :id here
    { path: '/Password', element: <Password/> },
    { path: '/Recipeview', element: <Recipeview/> },
    { path: '/recipe/:id', element: <RecipeDetail /> },
    { path: 'MyRecipe', element:<MyRecipes></MyRecipes>  },
    { path: 'Profile', element:<Profile></Profile>  },
    { path: 'CreatedRecipe/:id', element: <CreatedRecipe /> }


    
    
]);

export default router;