package crud.api.service;

import crud.api.model.RoleModel;
import crud.api.model.UserModel;
import crud.api.repository.RoleRepository;
import crud.api.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@Component
public class UserService {
    private final UserRepository userRepository;
    private RoleRepository roleRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    public void RoleService(RoleRepository roleRepository) {this.roleRepository = roleRepository; }
    //    -----Save user------
    public void saveUser(UserModel userModel) {
        userRepository.save(userModel);
    }
    //    -----Update user------
    public UserModel update (UserModel updatedUser) {
        return userRepository.save(updatedUser);
    }
    //    -----Get all users------
    public List<UserModel> getAll () {
        return userRepository.findAll();
    }
    //    -----Find user by ID------
    public Optional<UserModel> findById (Long id) {
        return Optional.ofNullable(userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id)));
    }
    //    -----Delete user------
    public void delete (Long id) {
        userRepository.findById(id);
    }
    //    -----Add role to user------
    public void addRoleToUser(String username, String roleName) {
        UserModel userModel = userRepository.findByUsername(username);
        RoleModel roleModel = roleRepository.findByName(roleName);
        userModel.getRoles().add(roleModel);
        userRepository.save(userModel);
    }
}
