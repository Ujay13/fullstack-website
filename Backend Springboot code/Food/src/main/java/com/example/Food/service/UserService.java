//package com.example.Food.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.example.Food.dto.UserDto;
//import com.example.Food.Models.userModels;
//import com.example.Food.Repository.UserRepository;
//
//@Service
//public class UserService{
//   
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//   
//    @Autowired
//    private UserRepository userRepository;
//
//    public userModels save(UserDto userDto) {
//        userModels user = new userModels(userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()),userDto.getUserName());
//        return userRepository.save(user);
//    }
//}




package com.example.Food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.Food.dto.UserDto;
import com.example.Food.Models.userModels;
import com.example.Food.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    // Save user (normal or admin)
    public userModels save(UserDto userDto, boolean isAdmin) {
        userModels user = new userModels(
            userDto.getEmail(),
            passwordEncoder.encode(userDto.getPassword()),
            userDto.getUserName()
        );
        user.setIsAdmin(isAdmin);
        user.setIsBlock(false); // default not blocked
        return userRepository.save(user);
    }
}