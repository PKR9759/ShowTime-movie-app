package com.movie.MovieInfo.service;
import java.util.List;

import com.movie.MovieInfo.entity.Favorite;

public interface FavoriteService {
    List<Favorite> getAllFavorites();
    Favorite getFavoriteById(Long id);
    void addFavorite(Favorite favorite);
    void updateFavorite(Favorite favorite);
    void deleteFavorite(Long id);
}