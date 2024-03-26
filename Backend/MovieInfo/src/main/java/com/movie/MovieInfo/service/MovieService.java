package com.movie.MovieInfo.service;

import java.util.List;

import com.movie.MovieInfo.entity.Movie;

public interface MovieService {
    List<Movie> getAllMovies();
    Movie getMovieById(Long id);
    void addMovie(Movie movie);
    void updateMovie(Long id,Movie movie);
    void deleteMovie(Long id);
}
