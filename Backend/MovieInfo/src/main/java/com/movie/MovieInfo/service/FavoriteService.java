package com.movie.MovieInfo.service;
import java.util.List;

import com.movie.MovieInfo.entity.Favorite;

public interface FavoriteService {
    List<Favorite> getAllFavorites();
//    Favorite getFavoriteById(Long id);
    void addFavorite(Long user_id,Long movie_id);
//    void updateFavorite(Favorite favorite);
    void deleteFavorite(Long id);
}