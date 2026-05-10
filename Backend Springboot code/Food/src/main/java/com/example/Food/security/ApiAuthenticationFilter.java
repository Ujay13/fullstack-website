//package com.example.Food.security;
//
//import java.io.IOException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.example.Food.Models.userModels;
//import com.example.Food.service.CustomUserDetail;
//import com.example.Food.Repository.UserRepository;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class ApiAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private TokenGenerator tokenGenerator;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String path = request.getServletPath();
//
//        // ✅ Skip admin login page, React login, register, and static resources
//        if (path.equals("/login") || path.equals("/api/login") || path.equals("/api/register")
//                || path.startsWith("/css") || path.startsWith("/js")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && !authHeader.isEmpty()) {
//            // Accept token as plain string or Bearer token
//            String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
//
//            if (tokenGenerator.validateToken(token)) {
//                userModels user = tokenGenerator.getUserByToken(token);
//                if (user != null) {
//                    CustomUserDetail userDetails = new CustomUserDetail(user);
//                    UsernamePasswordAuthenticationToken authentication =
//                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                } else {
//                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                    response.getWriter().write("User not found for token");
//                    return;
//                }
//            } else {
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().write("Invalid or expired token");
//                return;
//            }
//        } else if (path.startsWith("/api/")) {
//            // Require token for all other /api endpoints
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            response.getWriter().write("Token required");
//            return;
//        }
//
//        // Continue filter chain for all other requests
//        filterChain.doFilter(request, response);
//    }
//}

//2 step
//
//package com.example.Food.security;
//
//import java.io.IOException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//import com.example.Food.Models.userModels;
//import com.example.Food.service.CustomUserDetail;
//import com.example.Food.Repository.UserRepository;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class ApiAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private TokenGenerator tokenGenerator;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && !authHeader.isEmpty()) {
//            String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
//
//            if (tokenGenerator.validateToken(token)) {
//                userModels user = tokenGenerator.getUserByToken(token);
//                if (user != null && (user.getisAdmin() != null || !user.getisBlock())) {
//                    CustomUserDetail userDetails = new CustomUserDetail(user);
//                    UsernamePasswordAuthenticationToken authentication =
//                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                } else {
//                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                    response.getWriter().write("Unauthorized or blocked user");
//                    return;
//                }
//            } else {
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().write("Invalid or expired token");
//                return;
//            }
//        } else if (request.getRequestURI().startsWith("/api/")
//                && !request.getRequestURI().equals("/api/register")
//                && !request.getRequestURI().equals("/api/login")) {
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            response.getWriter().write("Token required");
//            return;
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}




//package com.example.Food.security;
//
//import java.io.IOException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//import com.example.Food.Models.userModels;
//import com.example.Food.service.CustomUserDetail;
//import com.example.Food.Repository.UserRepository;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class ApiAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private TokenGenerator tokenGenerator;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && !authHeader.isEmpty()) {
//            String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
//
//            if (tokenGenerator.validateToken(token)) {
//                userModels user = tokenGenerator.getUserByToken(token);
//                if (user != null && (user.getisAdmin() != null || !user.getisBlock())) {
//                    // Use existing getters: getisAdmin() and getisBlock()
//                    CustomUserDetail userDetails = new CustomUserDetail(user);
//                    UsernamePasswordAuthenticationToken authentication =
//                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                } else {
//                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                    response.getWriter().write("Unauthorized or blocked user");
//                    return;
//                }
//            } else {
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().write("Invalid or expired token");
//                return;
//            }
//        } else if (request.getRequestURI().startsWith("/api/")
//                && !request.getRequestURI().equals("/api/register")
//                && !request.getRequestURI().equals("/api/login")) {
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            response.getWriter().write("Token required");
//            return;
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}





//package com.example.Food.security;
//
//import java.io.IOException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.example.Food.Models.userModels;
//import com.example.Food.service.CustomUserDetail;
//import com.example.Food.Repository.UserRepository;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class ApiAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private TokenGenerator tokenGenerator;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && !authHeader.isEmpty()) {
//            String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
//
//            if (tokenGenerator.validateToken(token)) {
//                userModels user = tokenGenerator.getUserByToken(token);
//
//                // Only proceed if user is admin and not blocked
//                if (user != null 
//                    && Boolean.TRUE.equals(user.getIsAdmin()) 
//                    && !Boolean.TRUE.equals(user.getIsBlock())) {
//                    
//                    CustomUserDetail userDetails = new CustomUserDetail(user);
//                    UsernamePasswordAuthenticationToken authentication =
//                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//
//                } else {
//                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                    response.getWriter().write("Unauthorized or blocked user");
//                    return;
//                }
//            } else {
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().write("Invalid or expired token");
//                return;
//            }
//        } else if (request.getRequestURI().startsWith("/api/")
//                && !request.getRequestURI().equals("/api/register")
//                && !request.getRequestURI().equals("/api/login")) {
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            response.getWriter().write("Token required");
//            return;
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}


package com.example.Food.security;

import java.io.IOException;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.Food.Models.userModels;
import com.example.Food.service.CustomUserDetail;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class ApiAuthenticationFilter extends OncePerRequestFilter {

    private final TokenGenerator tokenGenerator;

    public ApiAuthenticationFilter(@Lazy TokenGenerator tokenGenerator) {
        this.tokenGenerator = tokenGenerator;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && !authHeader.isEmpty()) {
            String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;

            if (tokenGenerator.validateToken(token)) {
                userModels user = tokenGenerator.getUserByToken(token);

                if (user != null && !Boolean.TRUE.equals(user.getIsBlock())) {
                    CustomUserDetail userDetails = new CustomUserDetail(user);
                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                } else {
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    response.getWriter().write("Unauthorized or blocked user");
                    return;
                }
            } else {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid or expired token");
                return;
            }
        } else if (request.getRequestURI().startsWith("/api/")
                && !request.getRequestURI().equals("/api/register")
                && !request.getRequestURI().equals("/api/login")) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token required");
            return;
        }

        filterChain.doFilter(request, response);
    }
}
