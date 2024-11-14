import React from 'react'
import TourReviewForm from './tourReviwForm'
import ReviewList from './Review-List/ReviewList'

const TourReview = () => {
    return (
        <div className="container mx-auto py-8">
            {/* <TourReviewForm /> */}
            <ReviewList />
        </div>
    )
}

export default TourReview