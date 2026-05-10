
//package com.example.Food.controller;
//
//import com.example.Food.Models.userModels;
//import com.example.Food.Models.Recipemodels;
////import com.example.Food.Models.RecipeViewModels;
//import com.example.Food.Repository.UserRepository;
//import com.example.Food.Repository.RecipeRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//@RequestMapping("/admin")
//public class AdminController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private RecipeRepository recipeRepository;
//
//    // Admin Login Page (GET only, Spring Security handles POST)
//    @GetMapping("/login")
//    public String showLoginPage(@RequestParam(value = "error", required = false) String error,
//                                @RequestParam(value = "logout", required = false) String logout,
//                                Model model) {
//        if (error != null) model.addAttribute("error", "Invalid email or password");
//        if (logout != null) model.addAttribute("message", "Logged out successfully");
//        return "admin-login";
//    }
//
//    // Admin Home Page – List of Users
//    @GetMapping("/home")
//    public String adminHomePage(Model model) {
//        List<userModels> users = userRepository.findByisAdminFalse();
//        model.addAttribute("users", users);
//        return "admin-home";
//    }
//
//    // Block User
//    @GetMapping("/block/{id}")
//    public String blockUser(@PathVariable Long id) {
//        userRepository.findById(id).ifPresent(user -> {
//            user.setIsBlock(true);
//            userRepository.save(user);
//        });
//        return "redirect:/admin/home";
//    }
//
//    // Unblock User
//    @GetMapping("/unblock/{id}")
//    public String unblockUser(@PathVariable Long id) {
//        userRepository.findById(id).ifPresent(user -> {
//            user.setIsBlock(false);
//            userRepository.save(user);
//        });
//        return "redirect:/admin/home";
//    }
//
//    // Admin Logout (Spring Security handles the session/logout logic)
//    @GetMapping("/logout")
//    public String logoutPage() {
//        return "redirect:/admin/login?logout";
//    }
//
//    // ---------- Recipe Management ----------
//
//    // List all recipes
//    @GetMapping("/recipes")
//    public String listRecipes(Model model) {
//        List<Recipemodels> recipes = recipeRepository.findAll();
//        model.addAttribute("recipes", recipes);
//        return "admin-recipes";
//    }
//
//    // View recipe details
////    @GetMapping("/recipeview/{id}")
////    public String viewRecipe(@PathVariable Long id, Model model) {
////        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
////        if (recipeOpt.isPresent()) {
////            model.addAttribute("recipe", recipeOpt.get());
////            return "admin-recipe-view";
////        } else {
////            return "redirect:/admin/recipes";
////        }
////    }
//    
//    
//    
//    
//    
//    @GetMapping("/recipetable/{id}")
//    public String viewRecipeTable(@PathVariable Long id, Model model) {
//        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
//        if (recipeOpt.isPresent()) {
//            model.addAttribute("recipe", recipeOpt.get());
//            return "admin-recipetable";  // make sure this template exists
//        } else {
//            return "redirect:/admin/recipes";
//        }
//    }
//
//    
//    
//    
//    @GetMapping("/recipeview/{id}")
//    public String viewRecipe(@PathVariable Long id, Model model) {
//        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
//        if (recipeOpt.isPresent()) {
//            model.addAttribute("recipe", recipeOpt.get());
//            return "admin-recipe-view";  // make sure this template exists
//        } else {
//            return "redirect:/admin/recipes";
//        }
//    }
//
//    
//    
//    
//
//    // Report – Top recipes by views
//    @GetMapping("/report")
//    public String reportPage(Model model) {
//        List<Recipemodels> topRecipes = recipeRepository.findAll()
//                .stream()
//                .sorted((r1, r2) -> Long.compare(r2.getViews(), r1.getViews()))
//                .toList();
//        model.addAttribute("topRecipes", topRecipes);
//        return "admin-report";
//    }
//}





package com.example.Food.controller;

import com.example.Food.Models.userModels;
import com.example.Food.Models.Recipemodels;
import com.example.Food.Repository.UserRepository;
import com.example.Food.Repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/login")
    public String showLoginPage(@RequestParam(value = "error", required = false) String error,
                                @RequestParam(value = "logout", required = false) String logout,
                                Model model) {
        if (error != null) model.addAttribute("error", "Invalid email or password");
        if (logout != null) model.addAttribute("message", "Logged out successfully");
        return "admin-login";
    }

    @GetMapping("/home")
    public String adminHomePage(Model model) {
        List<userModels> users = userRepository.findByisAdminFalse();
        model.addAttribute("users", users);
        return "admin-home";
    }

    @GetMapping("/block/{id}")
    public String blockUser(@PathVariable Long id) {
        userRepository.findById(id).ifPresent(user -> {
            user.setIsBlock(true);
            userRepository.save(user);
        });
        return "redirect:/admin/home";
    }

    @GetMapping("/unblock/{id}")
    public String unblockUser(@PathVariable Long id) {
        userRepository.findById(id).ifPresent(user -> {
            user.setIsBlock(false);
            userRepository.save(user);
        });
        return "redirect:/admin/home";
    }

    @GetMapping("/logout")
    public String logoutPage() {
        return "redirect:/admin/login?logout";
    }

    @GetMapping("/recipes")
    public String listRecipes(Model model) {
        List<Recipemodels> recipes = recipeRepository.findAll();
        model.addAttribute("recipes", recipes);
        return "admin-recipes";
    }

    @GetMapping("/recipetable/{id}")
    public String viewRecipeTable(@PathVariable Long id, Model model) {
        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
        if (recipeOpt.isPresent()) {
            model.addAttribute("recipe", recipeOpt.get());
            return "admin-recipetable"; // make sure this template exists
        } else {
            return "redirect:/admin/recipes";
        }
    }

    @GetMapping("/recipeview/{id}")
    public String viewRecipe(@PathVariable Long id, Model model) {
        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
        if (recipeOpt.isPresent()) {
            model.addAttribute("recipe", recipeOpt.get());
            return "admin-recipe-view";  // make sure this template exists
        } else {
            return "redirect:/admin/recipes";
        }
    }

    @GetMapping("/report")
    public String reportPage(Model model, Authentication authentication) {
        List<Recipemodels> topRecipes = recipeRepository.findAll();

        // Group by user email to get unique users and recipe count
        Map<String, Long> userRecipeCount = topRecipes.stream()
                .collect(Collectors.groupingBy(r -> r.getUser().getEmail(), Collectors.counting()));

        // Extract unique users from recipes
        List<userModels> uniqueUsers = topRecipes.stream()
                .map(Recipemodels::getUser)
                .distinct()
                .toList();

        model.addAttribute("uniqueUsers", uniqueUsers);
        model.addAttribute("userRecipeCount", userRecipeCount);

        // Add logged in admin
        userModels adminUser = userRepository.findByEmail(authentication.getName());
        model.addAttribute("admin", adminUser);

        return "admin-report";
    }


}

