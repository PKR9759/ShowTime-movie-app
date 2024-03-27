package com.movie.MovieInfo.movieDAO;

import com.movie.MovieInfo.entity.Movie;

import java.util.List;

public interface MovieDAO {

    List<Movie> getAllMovies();

    Movie getMovieById(Long id);

    void addMovie(Movie movie);

    void updateMovie(Long id,Movie movie);

    void deleteMovie(Long id);
}