package com.movie.MovieInfo.service;

import com.movie.MovieInfo.entity.Movie;
import com.movie.MovieInfo.movieDAO.MovieDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public void updateMovie(Long id,Movie movie) {
        movieDAO.updateMovie(id,movie);
    }

    @Override
    public void deleteMovie(Long id) {
        movieDAO.deleteMovie(id);
    }
}
