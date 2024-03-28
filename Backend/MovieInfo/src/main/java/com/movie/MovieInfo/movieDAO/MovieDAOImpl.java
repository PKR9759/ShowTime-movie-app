package com.movie.MovieInfo.movieDAO;

import com.movie.MovieInfo.entity.Movie;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MovieDAOImpl implements MovieDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Movie> getAllMovies() {
        return entityManager.createQuery("FROM Movie", Movie.class).getResultList();
    }

    @Override
    public Movie getMovieById(Long id) {
        return entityManager.find(Movie.class, id);
    }

    @Override
    public void addMovie(Movie movie) {
        entityManager.persist(movie);
    }

    @Override
    public void updateMovie(Long id,Movie movie) {
    	Movie themovie=entityManager.find(Movie.class, id);
    	themovie.setTitle(movie.getTitle());
    	themovie.setDescription(movie.getDescription());
    	themovie.setDirector(movie.getDirector());
    	themovie.setActors(movie.getActors()); 	
    	themovie.setReleaseDate(movie.getReleaseDate());
    	themovie.setType(movie.getType());
    	themovie.setImdbRating(movie.getImdbRating());
    	themovie.setDuration(movie.getDuration());
    	themovie.setLanguage(movie.getLanguage());
    	themovie.setCountry(movie.getCountry());
    	themovie.setimageUrl(movie.getimageUrl());
        entityManager.merge(themovie);
    }

    @Override
    public void deleteMovie(Long id) {
        Movie movie = entityManager.find(Movie.class, id);
        if (movie != null) {
            entityManager.remove(movie);
        }
    }
}