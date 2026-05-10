//package com.example.Food.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import java.security.SecureRandom;
//import com.example.Food.Models.userModels;
//import com.example.Food.Repository.UserRepository;
//
//@Service
//public class TokenGenerator {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//    private static final int TOKEN_LENGTH = 60;
//    private static final SecureRandom RANDOM = new SecureRandom();
//
//    // Generate random string
//    private String generateRandomString() {
//        StringBuilder sb = new StringBuilder(TOKEN_LENGTH);
//        for (int i = 0; i < TOKEN_LENGTH; i++) {
//            sb.append(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())));
//        }
//        return sb.toString();
//    }
//
//    // Generate token and save to user
//    public String generateToken(String email, String password) {
//        userModels user = userRepository.findByEmail(email);
//        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
//            String token;
//            do {
//                token = generateRandomString();
//            } while (userRepository.existsByToken(token));
//
//            user.setToken(token);
//            userRepository.save(user);
//            return token;
//        }
//        return null;
//    }
//
//    // Validate token exists
//    public boolean validateToken(String token) {
//        return userRepository.findByToken(token) != null;
//    }
//
//    // Get user by token
//    public userModels getUserByToken(String token) {
//        return userRepository.findByToken(token);
//    }
//    
//}


package com.example.Food.security;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Food.Models.userModels;
import com.example.Food.Repository.UserRepository;

import java.security.SecureRandom;

@Service
public class TokenGenerator {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int TOKEN_LENGTH = 60;
    private static final SecureRandom RANDOM = new SecureRandom();

    public TokenGenerator(UserRepository userRepository, @Lazy PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    private String generateRandomString() {
        StringBuilder sb = new StringBuilder(TOKEN_LENGTH);
        for (int i = 0; i < TOKEN_LENGTH; i++) {
            sb.append(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())));
        }
        return sb.toString();
    }

    public String generateToken(String email, String password) {
        userModels user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            String token;
            do {
                token = generateRandomString();
            } while (userRepository.existsByToken(token));
            user.setToken(token);
            userRepository.save(user);
            return token;
        }
        return null;
    }

    public boolean validateToken(String token) {
        return userRepository.findByToken(token) != null;
    }

    public userModels getUserByToken(String token) {
        return userRepository.findByToken(token);
    }
}
