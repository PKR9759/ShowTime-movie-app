package com.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.entity.Movie;
import com.movie.movieDAO.MovieDAO;

import java.util.List;

@Service
@Transactional
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieDAO movieDAO;

    @Override
    public List<Movie> getAllMovies() {
        return movieDAO.getAllMovies();
    }

    @Override
    public Movie getMovieById(Long id) {
        return movieDAO.getMovieById(id);
    }

    @Override
    public void addMovie(Movie movie) {
        movieDAO.addMovie(movie);
    }

    @Override
    public void updateMovie(Movie movie) {
        movieDAO.updateMovie(movie);
    }

    @Override
    public void deleteMovie(Long id) {
        movieDAO.deleteMovie(id);
    }
}
