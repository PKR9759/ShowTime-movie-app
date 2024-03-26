package com.movie.MovieInfo.movieDAO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import com.movie.MovieInfo.entity.Review;

import java.util.List;

@Repository
public class ReviewDAOImpl implements ReviewDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Review> getAllReviews() {
        Query query = entityManager.createQuery("FROM Review");
        return query.getResultList();
    }

    @Override
    public Review getReviewById(Long id) {
        return entityManager.find(Review.class, id);
    }

    @Override
    public void addReview(Review review) {
        entityManager.persist(review);
    }

    @Override
    public void updateReview(Review review) {
        entityManager.merge(review);
    }

    @Override
    public void deleteReview(Long id) {
        Review review = entityManager.find(Review.class, id);
        if (review != null) {
            entityManager.remove(review);
        }
    }
}