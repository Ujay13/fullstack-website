//package com.example.Food.Models;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import jakarta.persistence.UniqueConstraint;
//
//@Entity
//@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
//public class userModels {
//   
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//   
//    private String email;
//    private String password;
//    private String fullname;
//    private Boolean isAdmin=false;
//    private Boolean isBlock=false;
//    private String token;
//
//    public userModels() {
//        super();
//    }
//
//    public userModels(String email, String password, String fullname) {
//        this.email = email;
//        this.password = password;
//        this.fullname = fullname;
//    }
//
//    // Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getFullname() {
//        return fullname;
//    }
//
//    public void setFullname(String fullname) {
//        this.fullname = fullname;
//    }
//    public Boolean getisAdmin() {
//    	return isAdmin;
//    }
//    public Boolean setisAdmin(Boolean isAdmin) {
//    	return this.isAdmin = isAdmin;
//    }	
//    public Boolean getisBlock() {
//    	return isBlock;
//    }
//    public Boolean setisBlock(Boolean isBlock) {
//    	return this.isBlock = isBlock;
//    }
//    public String getToken() {
//    	return token;
//    }
//    public void setToken(String token) {
//    	this.token = token;
//    }
//
//}




package com.example.Food.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class userModels {
   
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
   
    private String email;
    private String password;
    private String fullname;
    private Boolean isAdmin=false;
    private Boolean isBlock=false;
    private String token;

    public userModels() {
        super();
    }

    public userModels(String email, String password, String fullname) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    public Boolean getIsAdmin() {
    return isAdmin;
    }
    public void setIsAdmin(Boolean isAdmin) {
     this.isAdmin = isAdmin;
    }
    public Boolean getIsBlock() {
    return isBlock;
    }
    public void setIsBlock(Boolean isBlock) {
     this.isBlock = isBlock;
    }
    public String getToken() {
    return token;
    }
    public void setToken(String token) {
    this.token = token;
    }

}
