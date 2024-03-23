package com.movie.movieDAO;

import java.util.List;

import com.movie.entity.User;

public interface UserDAO {
    List<User> getAllUsers();
    User getUserById(Long id);
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
}