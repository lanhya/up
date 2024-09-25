package crud.api.repository;

import crud.api.model.DepartmentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<DepartmentModel, String> {
    DepartmentModel save(DepartmentModel departmentModel);

}
