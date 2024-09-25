package crud.api.controller;

import crud.api.model.DepartmentModel;
import crud.api.service.DepartmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/department")
public class DepartmentController {
    private final DepartmentService departmentService;
    public static ArrayList<DepartmentModel> departmentModels = new ArrayList<>();
    public DepartmentController(DepartmentService departmentService) { this.departmentService = departmentService;};
    //    -----Get user------
    @GetMapping("/all")
    public ArrayList<DepartmentModel> getDepartmentModel() { return (ArrayList<DepartmentModel>) departmentService.getAll();}
    //    -----Add user------
    @PostMapping("/add")
    public ResponseEntity<String> createDepartment(@RequestBody DepartmentModel departmentModel) {
        departmentService.save(departmentModel);
        return ResponseEntity.ok("Created department successfully");
    }
    //    -----Update user------
    @PutMapping("/update")
    public DepartmentModel updateDepartment(@RequestBody DepartmentModel departmentModel) {
        for (DepartmentModel d: departmentModels) {
            if (Objects.equals(d.getId(), departmentModel.getId())) {
                d.setName(departmentModel.getName());
                d.setStatus(departmentModel.getStatus());
            }
        }
        return departmentService.update(departmentModel);
    }
    //    -----Delete user------
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable Long id) {
        departmentService.delete(id);
        return ResponseEntity.ok("Delete department successfully.");
    }
    //    -----Search user------
    @GetMapping("/find-department/{id}")
    public ResponseEntity<Optional<DepartmentModel>> getById(@PathVariable Long id) {
        Optional<DepartmentModel> departmentModel = departmentService.findById(id);
        return ResponseEntity.ok(departmentModel);
    }
}

