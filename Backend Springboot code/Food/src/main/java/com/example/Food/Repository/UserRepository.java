package com.example.Food.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Food.Models.userModels;

public interface UserRepository extends JpaRepository<userModels, Long> {
    userModels findByEmail(String email);
    userModels findByToken(String token);
    boolean existsByToken(String token);
    
    List<userModels> findByisAdminFalse();
}