package com.movie.MovieInfo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.movie.MovieInfo.entity.*;
import com.movie.MovieInfo.service.*;

import java.util.List;

@RequestMapping("/api/user") 
@RestController
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/add") 
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }
    
    @GetMapping("/{id}") 
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @PutMapping("/update/{id}") 
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        userService.updateUser(id,user);
    }
    
    @DeleteMapping("/delete/{id}") 
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
