package com.movie.MovieInfo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movie.MovieInfo.entity.Review;
import com.movie.MovieInfo.movieDAO.ReviewDAO;

import java.util.List;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDAO reviewDAO;

    @Override
    public List<Review> getAllReviews() {
        return reviewDAO.getAllReviews();
    }

    @Override
    public Review getReviewById(Long id) {
        return reviewDAO.getReviewById(id);
    }

    @Override
    public void addReview(Review review) {
        reviewDAO.addReview(review);
    }

    @Override
    public void updateReview(Review review) {
        reviewDAO.updateReview(review);
    }

    @Override
    public void deleteReview(Long id) {
        reviewDAO.deleteReview(id);
    }
}