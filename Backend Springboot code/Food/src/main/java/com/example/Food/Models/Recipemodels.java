package com.example.Food.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*; // for @ManyToOne, @JoinColumn

@Entity
@Table(name = "recipe")
public class Recipemodels {
   
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id") // foreign key
    private userModels user;
    
    // ADD THIS FIELD for view count
    private Long views;

    private String image;
    private String title;
    private String incredients;
    private String steps;
    private String cookingTime;
    private String difficultyLevel;
    private String createdBy;

    public Recipemodels() {
        super();
    }

    public Recipemodels(String image, String title, String incredients, String steps, String cookingTime, String difficultyLevel, String createdBy) {
        this.image = image;
        this.title = title;
        this.incredients = incredients;
        this.steps = steps;
        this.cookingTime = cookingTime;
        this.createdBy = createdBy;
    }

    // --- Getters and Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public userModels getUser() {
        return user; 
    }
    
    public void setUser(userModels user) {
        this.user = user; 
    }

    public Long getViews() {
        return views;
    }

    public void setViews(Long views) {
        this.views = views;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIncredients() {
        return incredients;
    }

    public void setIncredients(String incredients) {
        this.incredients = incredients;
    }

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }

    public String getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(String cookingTime) {
        this.cookingTime = cookingTime;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
}



//package com.example.Food.Models;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "recipe")
//public class Recipemodels {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id") // foreign key
//    private userModels user;
//
//    private String image;
//    private String title;
//    private String incredients;
//    private String steps;
//    private String cookingTime;
//    private String difficultyLevel;
//    private String createdBy;
//
//    // Field to track the view count
//    private Long views = 0L;
//
//    public Recipemodels() {
//        super();
//    }
//
//    public Recipemodels(String image, String title, String incredients, String steps,
//                        String cookingTime, String difficultyLevel, String createdBy, Long views) {
//        this.image = image;
//        this.title = title;
//        this.incredients = incredients;
//        this.steps = steps;
//        this.cookingTime = cookingTime;
//        this.difficultyLevel = difficultyLevel;
//        this.createdBy = createdBy;
//        this.views = views != null ? views : 0L;
//    }
//
//    // Getters and Setters
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public userModels getUser() {
//        return user;
//    }
//
//    public void setUser(userModels user) {
//        this.user = user;
//    }
//
//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getIncredients() {
//        return incredients;
//    }
//
//    public void setIncredients(String incredients) {
//        this.incredients = incredients;
//    }
//
//    public String getSteps() {
//        return steps;
//    }
//
//    public void setSteps(String steps) {
//        this.steps = steps;
//    }
//
//    public String getCookingTime() {
//        return cookingTime;
//    }
//
//    public void setCookingTime(String cookingTime) {
//        this.cookingTime = cookingTime;
//    }
//
//    public String getDifficultyLevel() {
//        return difficultyLevel;
//    }
//
//    public void setDifficultyLevel(String difficultyLevel) {
//        this.difficultyLevel = difficultyLevel;
//    }
//
//    public String getCreatedBy() {
//        return createdBy;
//    }
//
//    public void setCreatedBy(String createdBy) {
//        this.createdBy = createdBy;
//    }
//
//    public Long getViews() {
//        return views;
//    }
//
//    public void setViews(Long views) {
//        this.views = views;
//    }
//}
