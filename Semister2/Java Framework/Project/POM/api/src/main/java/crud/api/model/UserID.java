package crud.api.model;

public class UserID {
    public static UserID get;
    private final Long id;
    public UserID(final String id) {
        this.id = Long.valueOf(id);
    }

    public Long getId() {
        return this.id;
    }
}
