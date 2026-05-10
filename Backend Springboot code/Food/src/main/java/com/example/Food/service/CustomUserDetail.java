//package com.example.Food.service;
//
//import java.util.Collection;
//import java.util.List;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.example.Food.Models.userModels;
//
//public class CustomUserDetail implements UserDetails {
//
//
//    private userModels user;
//
//
//    public CustomUserDetail(userModels user) {
//        this.user = user;
//    }
//
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of();
//    }
//
//
//    public String getFullname() {
//        return user.getFullname();
//    }
//
//
//    @Override
//    public String getPassword() {
//        return user.getPassword();
//    }
//
//
//    @Override
//    public String getUsername() {
//       
//        return user.getEmail();
//    }
//
//
//    @Override
//    public boolean isAccountNonExpired() {
//   
//        return true;
//    }
//
//
//    @Override
//    public boolean isAccountNonLocked() {
//   
//        return true;
//    }
//
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//   
//        return true;
//    }
//
//
//   @Override
//   public boolean isEnabled() {
//	   return true;
//   }
//}






package com.example.Food.service;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.Food.Models.userModels;

public class CustomUserDetail implements UserDetails {
    private final userModels user;

    public CustomUserDetail(userModels user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (Boolean.TRUE.equals(user.getIsAdmin())) {
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));  // Add ROLE_ prefix here
        }
        return List.of();
    }

    public String getFullname() {
        return user.getFullname();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !Boolean.TRUE.equals(user.getIsBlock());
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
