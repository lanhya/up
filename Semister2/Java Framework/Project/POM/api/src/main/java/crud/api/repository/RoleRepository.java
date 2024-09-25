package crud.api.repository;

import crud.api.model.RoleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleModel, Long> {
    RoleModel save(RoleModel roleModel);
    RoleModel findByName(String name);
}
