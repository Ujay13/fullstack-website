package com.example.Food.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.Food.Models.Recipemodels;
import com.example.Food.Models.userModels;

@Repository
public interface RecipeRepository extends JpaRepository<Recipemodels, Long> {

    // ✅ Fetch all recipes created by a specific user
    List<Recipemodels> findByUser(userModels user);
    List<Recipemodels> findByUserId(Long userId);

}