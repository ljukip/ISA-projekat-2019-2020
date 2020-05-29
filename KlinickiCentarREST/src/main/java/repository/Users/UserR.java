package repository.Users;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import model.users.User;

@Repository
public interface UserR extends JpaRepository <User, Long> {

	Optional<User> findByEmail(String mail);

}
