package com.movie.MovieInfo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "favorite")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Favorite [id=" + id + ", user=" + user + ", movie=" + movie + "]";
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	@ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;

    
}