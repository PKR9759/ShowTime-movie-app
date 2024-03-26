package com.movie.MovieInfo.service;

import java.util.List;

import com.movie.MovieInfo.entity.User;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    void addUser(User user);
    void updateUser(Long id,User user);
    void deleteUser(Long id);
}
