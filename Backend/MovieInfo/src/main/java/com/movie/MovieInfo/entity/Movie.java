package com.movie.MovieInfo.entity;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Override
	public String toString() {
		return "Movie [id=" + id + ", title=" + title + ", description=" + description + ", director=" + director
				+ ", actors=" + actors + ", genre=" + genre + ", releaseDate=" + releaseDate + ", type=" + type
				+ ", imdbRating=" + imdbRating + ", duration=" + duration + ", language=" + language + ", country="
				+ country + ", trailerUrl=" + trailerUrl + ", poster=" + Arrays.toString(poster) + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getImdbRating() {
		return imdbRating;
	}

	public void setImdbRating(double imdbRating) {
		this.imdbRating = imdbRating;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getTrailerUrl() {
		return trailerUrl;
	}

	public void setTrailerUrl(String trailerUrl) {
		this.trailerUrl = trailerUrl;
	}

	public byte[] getPoster() {
		return poster;
	}

	public void setPoster(byte[] poster) {
		this.poster = poster;
	}

	private String title;
    private String description;
    private String director;
    private String actors;
    private String genre;
    @Temporal(TemporalType.DATE)
    private Date releaseDate;
    private String type; // Hollywood, Bollywood, South Indian, etc.
    private double imdbRating; // IMDb rating of the movie
    private int duration; // Duration of the movie in minutes
    private String language; // Language of the movie
    private String country; // Country of origin
    private String trailerUrl; // URL of the movie trailer
    
    @Lob
    private byte[] poster; // Byte array to store the image data

    // Getters and setters
}
