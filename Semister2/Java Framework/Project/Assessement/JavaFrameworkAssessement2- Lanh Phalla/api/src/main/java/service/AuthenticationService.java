package service;

import model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import repository.AuthRepository;

@Service
public class AuthService {
    @Autowired
    private final AuthRepository authRepository;
    @Autowired
    private AuthService authService;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    // Assuming you have an old encoder
    @Autowired
    private final PasswordEncoder oldPasswordEncoder;

    public void register(UserModel userModel) {
        authRepository.save(userModel);
    }
    @Autowired
    public AuthService(AuthRepository authRepository, PasswordEncoder passwordEncoder, PasswordEncoder oldPasswordEncoder) {
        this.authRepository = authRepository;

        this.passwordEncoder = passwordEncoder;
        this.oldPasswordEncoder = oldPasswordEncoder;
    }

    public UserModel findUserByUserName(String user_name) {
        return this.authRepository.findByUserName(user_name);
    }

    public String login(String user_name, String password) {
        UserModel verifyUser = authService.findUserByUserName(user_name);
        boolean check = passwordEncoder.matches(password, user_name);
        System.out.println("Service check ===> " + check);
        System.out.println("Service username===> " + user_name);
        System.out.println("Service password===> " + password);
        System.out.println("User is match -> "+ verifyUser);


//         Check if the stored password is BCrypt encoded
        if (verifyUser != null) {

            // First, check if the password is already in BCrypt format
            if (isBcrypt(verifyUser.getPassword())) {
                if (passwordEncoder.matches(password, verifyUser.getPassword())) {
                    return "Login successful";
                }
            }
            // If not, check using the old encoder
            else if (oldPasswordEncoder.matches(password, verifyUser.getPassword())) {
                // Re-encode the password using BCrypt
                verifyUser.setPassword(passwordEncoder.encode(password));
                System.out.println("Process Re-encode the password using BCrypt->  "+ verifyUser);
                // userRepository.save(userModel);
                return "Login successful, password re-encoded";
            } else {
                return "Invalid password";
            }
        } else {
            return "Invalid username";
        }
        return user_name;
    }

    private boolean isBcrypt(String password) {
//         BCrypt passwords typically start with "$2a$" or "$2b$"
        return password != null && (password.startsWith("$2a$") || password.startsWith("$2b$"));
    }
}
