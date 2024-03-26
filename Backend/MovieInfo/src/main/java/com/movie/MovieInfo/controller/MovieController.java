package com.movie.MovieInfo.controller;

import com.movie.MovieInfo.entity.Movie;
import com.movie.MovieInfo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/getallmovies")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/getmoviebyid/{id}")
    public Movie getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }

    @PostMapping("/addmovie")
    public void addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
    }

    @PutMapping("/update/{id}")
    public void updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        movie.setId(id); 
        movieService.updateMovie(id,movie);
    }

    @DeleteMapping("delete/{id}")
    public void deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
    }
}
