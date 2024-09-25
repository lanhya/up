package repository;

import model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository extends JpaRepository<UserModel, Long> {
    UserModel findByUserName(String user_name);
}
