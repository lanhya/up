package crud.api.repository;

import crud.api.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel save(UserModel userModel);
    UserModel findByUsername(String username);
}
