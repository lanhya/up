package exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        throw new ResourceNotFoundException("Resource not found with id: " + message);
    }
}