package com.movie.MovieInfo.movieDAO;

import com.movie.MovieInfo.entity.Movie;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MovieDAOImpl implements MovieDAO {

    @PersistenceContext
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
    public void updateMovie(Movie movie) {
        entityManager.merge(movie);
    }

    @Override
    public void deleteMovie(Long id) {
        Movie movie = entityManager.find(Movie.class, id);
        if (movie != null) {
            entityManager.remove(movie);
        }
    }
}
