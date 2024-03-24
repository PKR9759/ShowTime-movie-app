package com.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.entity.Favorite;
import com.movie.movieDAO.FavoriteDAO;

import java.util.List;

@Service
@Transactional
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteDAO favoriteDAO;

    @Override
    public List<Favorite> getAllFavorites() {
        return favoriteDAO.getAllFavorites();
    }

    @Override
    public Favorite getFavoriteById(Long id) {
        return favoriteDAO.getFavoriteById(id);
    }

    @Override
    public void addFavorite(Favorite favorite) {
        favoriteDAO.addFavorite(favorite);
    }

    @Override
    public void updateFavorite(Favorite favorite) {
        favoriteDAO.updateFavorite(favorite);
    }

    @Override
    public void deleteFavorite(Long id) {
        favoriteDAO.deleteFavorite(id);
    }
}