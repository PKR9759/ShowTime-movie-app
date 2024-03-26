package com.movie.MovieInfo.movieDAO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import com.movie.MovieInfo.entity.User;

import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<User> getAllUsers() {
        Query query = entityManager.createQuery("FROM User");
        return query.getResultList();
    }

    @Override
    public User getUserById(Long id) {
        return entityManager.find(User.class, id);
    }

    @Override
    public void addUser(User user) {
        entityManager.persist(user);
    }

    @Override
    public void updateUser(Long id,User theuser) {
    	
    	User user = entityManager.find(User.class, id);
    	String pass  = theuser.getPassword();
    	String username = theuser.getUsername();
    	if(pass != null) {
    		user.setPassword(pass);
    	}
    	if(username != null) {
    		user.setUsername(username);
    	}
    	   
    	user.setReviews(theuser.getReviews());
    	
    	user.setFavorites(theuser.getFavorites());
        entityManager.merge(user);
    }

    @Override
    public void deleteUser(Long id) {
        User user = entityManager.find(User.class, id);
        if (user != null) {
            entityManager.remove(user);
        }
    }
}
