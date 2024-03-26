package com.movie.MovieInfo.service;

import com.movie.MovieInfo.entity.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> getAllMovies();

    Movie getMovieById(Long id);

    void addMovie(Movie movie);

    void updateMovie(Movie movie);

    void deleteMovie(Long id);
}
