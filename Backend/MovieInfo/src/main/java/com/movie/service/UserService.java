package com.movie.service;

import java.util.List;

import com.movie.entity.User;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
}
