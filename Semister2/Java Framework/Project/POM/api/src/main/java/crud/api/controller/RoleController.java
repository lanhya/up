package crud.api.controller;

import crud.api.model.RoleModel;
import crud.api.service.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/role")
public class RoleController {
    private final RoleService roleService;
    public static ArrayList<RoleModel> roleModels = new ArrayList<>();
    public RoleController(RoleService roleService) {this.roleService = roleService;}

    //    -----Get user------
    @GetMapping("/all")
    public ArrayList<RoleModel> getUser() {
        return (ArrayList<RoleModel>) roleService.getAll();
    }
    //    -----Add user------
    @PostMapping("/add")
    public ResponseEntity<String> createRole(@RequestBody RoleModel roleModel) {
        roleService.save(roleModel);
        return ResponseEntity.ok("Created role successfully");
    }
    //    -----Add user------
    @PutMapping("/update")
    public RoleModel updateRole(@RequestBody RoleModel roleModel) {
        for (RoleModel r: roleModels) {
            if (Objects.equals(r.getId(), roleModel.getId())) {
                r.setName(roleModel.getName());
                r.setStatus(roleModel.getStatus());
            }
        }
        return roleService.update(roleModel);
    }
    //    -----Delete user------
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRole(@PathVariable Long id) {
        roleService.delete(id);
        return ResponseEntity.ok("Delete role successfully.");
    }
    //    -----Search user------
    @GetMapping("/find-role/{id}")
    public ResponseEntity<Optional<RoleModel>> getById(@PathVariable Long id) {
        Optional<RoleModel> roleModel = roleService.findById(id);
        return ResponseEntity.ok(roleModel);
    }

}
