package crud.api.service;

import crud.api.model.RoleModel;
import crud.api.repository.RoleRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class RoleService {
    private final RoleRepository roleRepository;
    @Autowired
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    //    -----Save role------
    public void save(RoleModel roleModel) {
        roleModel.setId(1L);
        roleModel.setName("Addmin");
        roleRepository.save(roleModel);
    }
    //    -----Update role------
    public RoleModel update(RoleModel updatedRole) {
        return roleRepository.save(updatedRole);
    }
    //    -----Get all role------
    public List<RoleModel> getAll() {
        return roleRepository.findAll();
    }
    //    -----Find role by id------
    public Optional<RoleModel> findById(Long id) {
        return Optional.ofNullable(roleRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id)));
    }
    //    -----Delete role------
    public void delete(Long id) {
        roleRepository.findById(id);
    }

}
