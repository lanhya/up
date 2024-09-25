package crud.api.controller;

import crud.api.model.UserModel;
import crud.api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    public static ArrayList<UserModel> userModels = new ArrayList<>();

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //    -----Get user------
    @GetMapping("/all")
    public ArrayList<UserModel> getUser() {
        return (ArrayList<UserModel>) userService.getAll();
    }
    //    -----Add user------
    @PostMapping("/add")
    public ResponseEntity<String> createUser(@RequestBody UserModel userModel) {
        userService.saveUser(userModel);
        return ResponseEntity.ok("Created user successfully");
    }
    //    -----Update user------
    @PutMapping("/update")
    public UserModel updateUser(@RequestBody UserModel userModel) {
        for (UserModel u: userModels) {
            if (Objects.equals(u.getId(), userModel.getId())) {
                u.setUsername(userModel.getUsername());
                u.setGender(u.getGender());
                u.setPassword(userModel.getPassword());
                u.setEmail(userModel.getEmail());
                u.setStatus(userModel.getStatus());
            }
        }
        return userService.update(userModel);
    }

    //    -----Delete user------
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.ok("Delete user successfully.");
    }
    //    -----Find user------
    @GetMapping("/find-user/{id}")
    public ResponseEntity<Optional<UserModel>> getById(@PathVariable Long id) {
        Optional<UserModel> userModel = userService.findById(id);
        return ResponseEntity.ok(userModel);
    }

    //    -----Add role to user------
    @PostMapping("/user/{username}/role/{rolename}")
    public ResponseEntity<String> addRoleToUser(@PathVariable String username, @PathVariable String rolename) {
        userService.addRoleToUser(username, rolename);
        return ResponseEntity.ok("Add role to user successfully.");
    }
}
