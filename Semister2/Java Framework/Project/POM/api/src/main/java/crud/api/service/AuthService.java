package crud.api.service;

import crud.api.model.UserModel;
import crud.api.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = userRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        System.out.println("User name service ->   "+userModel.getPassword());
        System.out.println("Password service ->   "+userModel.getUserName());

        return org.springframework.security.core.userdetails.User
                .withUsername(userModel.getUserName())
                .password(userModel.getPassword())
                .roles()  // Assign roles as needed
                .build();
    }

}
