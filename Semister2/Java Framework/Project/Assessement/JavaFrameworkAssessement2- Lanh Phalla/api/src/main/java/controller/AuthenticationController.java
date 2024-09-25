package controller;

import model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String userName, @RequestParam String password) {
        System.out.println("-----> Author controller track username login-> " +userName);
        System.out.println("-----> Author controller track password login-> " + password);
        String response = authService.login(userName, password);
        if (authService.findUserByUserName(userName).equals(userName)) {
            System.out.println("-----> User login is correct.");
        }
        if (response.equals("200")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserModel userModel) {
        // Check if the user already exists
        if (authService.findUserByUserName(userModel.getUser_name()).equals(userModel.getUser_name())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }

        // Encode the password before saving the user
        userModel.setPassword(new BCryptPasswordEncoder().encode(userModel.getPassword()));

        // Save the user to the database
        authService.register(userModel);

        // Return a successful response
        return ResponseEntity.ok("Register successfully");
    }
}
