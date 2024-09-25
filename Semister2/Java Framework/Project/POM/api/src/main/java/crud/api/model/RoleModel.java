package crud.api.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "roles") // Use your actual table name
public class RoleModel {
    @Id
    private Long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private Boolean status;
    @ManyToMany(mappedBy = "roles")
    private Set<UserModel> userModels = new HashSet<>();

}
