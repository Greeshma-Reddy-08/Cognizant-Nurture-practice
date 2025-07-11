package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public TokenResponse authenticate(HttpServletRequest request) {
        // Get Authorization header (Basic base64encoded(user:pwd))
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Basic ")) {
            throw new RuntimeException("Missing Authorization header");
        }

        // Decode username:password
        String base64Credentials = header.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        // Validate (in real app, check from DB or in-memory user)
        if (!"user".equals(username) || !"pwd".equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }

        // Generate JWT
        String token = jwtUtil.generateToken(username);

        return new TokenResponse(token);
    }

    // Response wrapper
    public static class TokenResponse {
        private String token;

        public TokenResponse() {}
        public TokenResponse(String token) {
            this.token = token;
        }
        public String getToken() {
            return token;
        }
        public void setToken(String token) {
            this.token = token;
        }
    }
}
