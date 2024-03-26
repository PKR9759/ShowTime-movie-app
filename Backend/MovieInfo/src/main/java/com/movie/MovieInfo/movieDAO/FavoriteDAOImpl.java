package com.movie.MovieInfo.movieDAO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import com.movie.MovieInfo.entity.Favorite;

import java.util.List;

@Repository
public class FavoriteDAOImpl implements FavoriteDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Favorite> getAllFavorites() {
        Query query = entityManager.createQuery("FROM Favorite");
        return query.getResultList();
    }

    @Override
    public Favorite getFavoriteById(Long id) {
        return entityManager.find(Favorite.class, id);
    }

    @Override
    public void addFavorite(Favorite favorite) {
        entityManager.persist(favorite);
    }

    @Override
    public void updateFavorite(Favorite favorite) {
        entityManager.merge(favorite);
    }

    @Override
    public void deleteFavorite(Long id) {
        Favorite favorite = entityManager.find(Favorite.class, id);
        if (favorite != null) {
            entityManager.remove(favorite);
        }
    }
}