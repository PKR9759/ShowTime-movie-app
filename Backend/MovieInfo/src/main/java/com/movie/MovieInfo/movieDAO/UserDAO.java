package com.movie.MovieInfo.movieDAO;

import java.util.List;

import com.movie.MovieInfo.entity.User;

public interface UserDAO {
    List<User> getAllUsers();
    User getUserById(Long id);
    void addUser(User user);
    void updateUser(Long id,User user);
    void deleteUser(Long id);
}