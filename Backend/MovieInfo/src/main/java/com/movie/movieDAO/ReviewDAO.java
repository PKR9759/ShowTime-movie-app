package com.movie.movieDAO;

import java.util.List;

import com.movie.entity.Review;

public interface ReviewDAO {
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    void addReview(Review review);
    void updateReview(Review review);
    void deleteReview(Long id);
}