//package com.example.Food.service;
//
//import com.example.Food.Models.RecipeViewModels;
//import com.example.Food.Models.Recipemodels;
//import com.example.Food.Models.userModels;
//import com.example.Food.Repository.RecipeViewRepository;
//import com.example.Food.Repository.RecipeRepository;
//import com.example.Food.Repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class RecipeViewService {
//
//    @Autowired
//    private RecipeViewRepository recipeViewRepository;
//
//    @Autowired
//    private RecipeRepository recipeRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    /**
//     * Checks if the user has already viewed the recipe.
//     * If not, increments the recipe's views and saves a new RecipeViewModels record.
//     */
//    public boolean incrementViewIfNotViewed(Long recipeId, String userEmail) {
//        Optional<Recipemodels> recipeOpt = recipeRepository.findById(recipeId);
//        if (recipeOpt.isEmpty()) {
//            return false;  // Recipe not found
//        }
//        Recipemodels recipe = recipeOpt.get();
//
//        // userRepository.findByEmail returns userModels or null now
//        userModels user = userRepository.findByEmail(userEmail);
//        if (user == null) {
//            return false;  // User not found
//        }
//
//        boolean alreadyViewed = recipeViewRepository.existsByRecipeAndUser(recipe, user);
//        if (!alreadyViewed) {
//            RecipeViewModels newView = new RecipeViewModels(recipe, user);
//            recipeViewRepository.save(newView);
//
//            Long currentViews = recipe.getViews() == null ? 0L : recipe.getViews();
//            recipe.setViews(currentViews + 1);
//            recipeRepository.save(recipe);
//
//            return true;  // View incremented
//        }
//        return false;  // Already viewed before, no increment
//    }
//}
