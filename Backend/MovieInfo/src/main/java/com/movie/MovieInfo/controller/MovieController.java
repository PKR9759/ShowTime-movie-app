package com.movie.MovieInfo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.movie.MovieInfo.entity.*;
import com.movie.MovieInfo.service.*;

import java.util.List;

@RequestMapping("/api/movie") 
@RestController
public class MovieController {
    
    @Autowired
    private MovieService movieService;
    
    @PostMapping("/add") 
    public void addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
    }
    
    @GetMapping("/{id}") 
    public Movie getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }
    
    @GetMapping("/all")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }
    
    @PutMapping("/update/{id}") 
    public void updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        movieService.updateMovie(id,movie);
    }
    
    @DeleteMapping("/delete/{id}") 
    public void deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
    }
}
