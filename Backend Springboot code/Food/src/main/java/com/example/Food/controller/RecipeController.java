package com.example.Food.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Food.Models.Recipemodels;
import com.example.Food.Models.userModels;
import com.example.Food.Repository.RecipeRepository;
import com.example.Food.Repository.UserRepository;
import com.example.Food.security.TokenGenerator;
//import com.example.Food.service.RecipeViewService;

@RestController
@RequestMapping("/api")
public class RecipeController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenGenerator tokenGenerator;
    
//    @Autowired
//    private RecipeViewService recipeViewService;

    // 🔹 Login with token generation
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody userModels userRequest) {
        String email = userRequest.getEmail();
        String password = userRequest.getPassword();

        userModels user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {

            if (user.getIsBlock()) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(Map.of("status", "error", "message", "Your account has been blocked by admin"));
            }

            // Generate token
            String token = tokenGenerator.generateToken(email, password);
            user.setToken(token);
            userRepository.save(user);

            return ResponseEntity.ok(Map.of(
                    "status", "success",
                    "message", user.getIsAdmin() ? "Admin login successful" : "User login successful",
                    "user", user,
                    "token", token
            ));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("status", "error", "message", "Invalid email or password"));
    }

    // 🔹 Register new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody userModels user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("status", "error", "message", "Email already exists"));
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setIsAdmin(false);
        user.setIsBlock(false);
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("status", "success", "message", "User registered successfully"));
    }

    // 🔹 Create recipe (token-protected)
    @PostMapping("/recipecreate")
    public ResponseEntity<?> createRecipe(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody Recipemodels newRecipe) {

        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("status", "error", "message", "Invalid or expired token"));
        }

        userModels user = tokenGenerator.getUserByToken(token);
        newRecipe.setUser(user);
        newRecipe.setCreatedBy(user.getFullname());

        Recipemodels savedRecipe = recipeRepository.save(newRecipe);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRecipe);
    }

    // 🔹 Delete recipe
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRecipe(@RequestHeader("Authorization") String authHeader,
                                          @PathVariable Long id) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        userModels user = tokenGenerator.getUserByToken(token);
        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);

        if (recipeOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Recipe not found");
        }

        Recipemodels recipe = recipeOpt.get();
        if (!recipe.getUser().getId().equals(user.getId()) && !user.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Not allowed to delete this recipe");
        }

        recipeRepository.delete(recipe);
        return ResponseEntity.ok("Recipe deleted successfully");
    }

    // 🔹 View recipe detail by ID
    @GetMapping("/recipedetailview/{id}")
    public ResponseEntity<?> recipeDetailView(@PathVariable Long id,
                                              @RequestHeader("Authorization") String authHeader) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);
        if (recipeOpt.isPresent()) {
            return ResponseEntity.ok(recipeOpt.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Recipe not found");
        }
    }

    // 🔹 Get all recipes
    @GetMapping("/Home")
    public ResponseEntity<?> getAllRecipes(@RequestHeader("Authorization") String authHeader) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        List<Recipemodels> recipes = recipeRepository.findAll();
        if (recipes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No recipes found");
        }

        return ResponseEntity.ok(recipes);
    }

    // 🔹 Get recipes for logged-in user
    @GetMapping("/myrecipes")
    public ResponseEntity<?> getUserRecipes(@RequestHeader("Authorization") String authHeader) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        userModels user = tokenGenerator.getUserByToken(token);
        List<Recipemodels> userRecipes = recipeRepository.findByUser(user);

        if (userRecipes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No recipes found for this user");
        }

        return ResponseEntity.ok(userRecipes);
    }

    // 🔹 Change password
    @PostMapping("/changepassword")
    public ResponseEntity<?> changePassword(@RequestHeader("Authorization") String authHeader,
                                            @RequestBody Map<String, String> request) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        userModels user = tokenGenerator.getUserByToken(token);
        String oldPassword = request.get("oldPassword");
        String newPassword = request.get("newPassword");

        if (oldPassword == null || newPassword == null) {
            return ResponseEntity.badRequest().body("Old and new password are required");
        }

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Old password is incorrect");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        return ResponseEntity.ok("Password changed successfully");
    }

    // 🔹 Get recipe by ID for edit
    @GetMapping("/recipeedit/{id}")
    public ResponseEntity<?> getRecipeForEdit(@PathVariable Long id,
                                              @RequestHeader("Authorization") String authHeader) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        userModels user = tokenGenerator.getUserByToken(token);
        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);

        if (recipeOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Recipe not found");
        }

        Recipemodels recipe = recipeOpt.get();
        if (!recipe.getUser().getId().equals(user.getId()) && !user.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Not allowed to view this recipe");
        }

        return ResponseEntity.ok(recipe);
    }

    // 🔹 Update recipe by ID
    @PutMapping("/recipeedit/{id}")
    public ResponseEntity<?> updateRecipe(@PathVariable Long id,
                                          @RequestHeader("Authorization") String authHeader,
                                          @RequestBody Recipemodels updatedRecipe) {
        String token = extractToken(authHeader);
        if (!tokenGenerator.validateToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        userModels user = tokenGenerator.getUserByToken(token);
        Optional<Recipemodels> recipeOpt = recipeRepository.findById(id);

        if (recipeOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Recipe not found");
        }

        Recipemodels recipe = recipeOpt.get();
        if (!recipe.getUser().getId().equals(user.getId()) && !user.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Not allowed to edit this recipe");
        }

        recipe.setTitle(updatedRecipe.getTitle());
        recipe.setIncredients(updatedRecipe.getIncredients());
        recipe.setSteps(updatedRecipe.getSteps());
        recipe.setCookingTime(updatedRecipe.getCookingTime());
        recipe.setDifficultyLevel(updatedRecipe.getDifficultyLevel());
        recipe.setImage(updatedRecipe.getImage());

        Recipemodels savedRecipe = recipeRepository.save(recipe);
        return ResponseEntity.ok(Map.of(
                "message", "Recipe updated successfully",
                "updatedRecipe", savedRecipe
        ));
    }
    
    
//    @PostMapping("/recipes/{id}/incrementView")
//    public ResponseEntity<String> incrementView(
//            @PathVariable Long id,
//            @RequestHeader("Authorization") String token) {
//
//        // Implement your token extraction and validation logic here
//        String userEmail = extractEmailFromToken(token);
//
//        boolean incremented = recipeViewService.incrementViewIfNotViewed(id, userEmail);
//
//        if (incremented) {
//            return ResponseEntity.ok("View count incremented");
//        } else {
//            return ResponseEntity.ok("View count not incremented (already counted or error)");
//        }
//    }
//
//    // Dummy method to extract user email from token, replace with actual logic
//    private String extractEmailFromToken(String token) {
//        // TODO: Implement actual token parsing and user email extraction
//        return "user@example.com"; 
//    }
//    
    
   
    // 🔹 Helper to extract token
    private String extractToken(String authHeader) {
        if (authHeader == null || authHeader.isEmpty()) return null;
        return authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
    }
}