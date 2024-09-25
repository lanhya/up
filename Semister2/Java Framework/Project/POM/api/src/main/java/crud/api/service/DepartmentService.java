package crud.api.service;

import crud.api.model.DepartmentModel;
import crud.api.repository.DepartmentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class DepartmentService {
    private final DepartmentRepository departmentRepository;
    @Autowired
    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    //    -----Save department------
    public void save(DepartmentModel departmentModel) {
        departmentModel.setId(1L);
        departmentModel.setName("UP Center");
        departmentRepository.save(departmentModel);
    }
    //    -----Update department------
    public DepartmentModel update(DepartmentModel updateDepartment) {
        return departmentRepository.save(updateDepartment);
    }
    //    -----Get all departments------
    public List<DepartmentModel> getAll() {
        return departmentRepository.findAll();
    }
    //    -----Find department by ID------
    public Optional<DepartmentModel> findById (Long id) {
        return Optional.ofNullable(departmentRepository.findById(String.valueOf(id)).orElseThrow(() -> new EntityNotFoundException("Department not found with id: " + id)));
    }
    //    -----Delete department------
    public void delete(Long id) {
        departmentRepository.findById(String.valueOf(id));
    }
}
