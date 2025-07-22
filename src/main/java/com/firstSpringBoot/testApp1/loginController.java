package com.firstSpringBoot.testApp1;

import com.firstSpringBoot.testApp1.model.user;
import com.firstSpringBoot.testApp1.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class loginController {

    @Autowired
    private UserRepo ur;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody user request) {
        String userId = request.getUserId();
        String password = request.getPassword();

        if (ur.existsById(userId)) {
            user existingUser = ur.findById(userId).orElse(null);
            if (existingUser != null && existingUser.getPassword().equals(password)) {
                return ResponseEntity.ok("Login successful");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }


    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody user request) {
        if (ur.existsById(request.getUserId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }
        ur.save(request);
        return ResponseEntity.ok("Registration successful");
    }

}
