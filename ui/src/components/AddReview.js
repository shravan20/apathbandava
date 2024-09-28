import React, { useState } from 'react';

const AddReview = ({ onAddReview }) => {
    const [review, setReview] = useState({ content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview(review);
        setReview({ content: '' });
    };

    return (
        <div className="card">
            <h2>Add Review</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={review.content} onChange={(e) => setReview({ ...review, content: e.target.value })} placeholder="Review" required />
                <button type="submit" className="primary">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;
