package com.movie.movieDAO;

import java.util.List;

import com.movie.entity.Favorite;

public interface FavoriteDAO {
    List<Favorite> getAllFavorites();
    Favorite getFavoriteById(Long id);
    void addFavorite(Favorite favorite);
    void updateFavorite(Favorite favorite);
    void deleteFavorite(Long id);
}
