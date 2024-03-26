package com.movie.MovieInfo.movieDAO;

import java.util.List;

import com.movie.MovieInfo.entity.Favorite;
import com.movie.MovieInfo.entity.User;

public interface FavoriteDAO {
    List<Favorite> getAllFavorites();
//    Favorite getFavoriteById(Long id);
    public User addFavorite(Long user_id,Long movie_id);
//    void updateFavorite(Favorite favorite);
    void deleteFavorite(Long id);
}
