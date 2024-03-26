package com.movie.MovieInfo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.MovieInfo.entity.Favorite;
import com.movie.MovieInfo.service.FavoriteService;

@RestController
@RequestMapping("api/favorite")
public class FavoriteController {

	
	private FavoriteService favoriteserv;
	
	@Autowired
	public FavoriteController(FavoriteService favoriteserv)
	{
		this.favoriteserv = favoriteserv;
	}
	@PostMapping("add/{user_id}/{movie_id}")
	void Addfavoritemovie(@PathVariable Long user_id,@PathVariable Long movie_id) {
		favoriteserv.addFavorite(user_id,movie_id);
	}
	
	
}
