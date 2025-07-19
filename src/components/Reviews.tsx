import React, { useState } from 'react';

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    avatar?: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Luca_Benedetti",
        rating: 5,
        comment: "Working with Swing Academy has been a game changer for my swing trading journey. Their strategic insights and practical guidance have not only helped me spot profitable trades but also manage risks effectively. The way they break down complex concepts into actionable steps has boosted my confidence and consistency in the market. Highly recommend their program to anyone serious about leveling up their trading game!",
        date: "2024-05-08",
        avatar: "https://i.pinimg.com/736x/f6/45/9f/f6459f823220d6b04a9a1f277949ed0e.jpg"
    },
    {
        id: 2,
        name: "Diego Morales",
        rating: 5,
        comment: "Not gon lie I was tryna day trade and just burning cash. Shub showed me how to chill and wait for real setups, now I actually feel in control of my trades. This mentorship hittin different, changed my whole mindset.",
        date: "2024-05-08",
        avatar: "https://i.pinimg.com/736x/53/02/d5/5302d59828b4bd2a7addc0d042e5df15.jpg"
    },
    {
        id: 3,
        name: "AndreiIonescu2004",
        rating: 5,
        comment: "Didn't even know what swing trading was a couple months ago now I got a lil watchlist, I'm setting alerts, and I actually feel like a real trader. The calls, the guidance, everything's locked in.",
        date: "2024-05-10",
        avatar: "https://i.pinimg.com/736x/33/20/8c/33208c0413b064230c6761878fe5bd4e.jpg"
    },
    {
        id: 4,
        name: "Sven",
        rating: 5,
        comment: "I used to be deep in day trading, grinding charts all day, stressed, overtrading, barely breaking even. Ever since I switched to swing trading with the Academy, I'm makin cleaner plays, actually sleeping at night 😂 . Less trades, more profit.",
        date: "2024-05-09",
        avatar: "https://i.pinimg.com/736x/07/fb/34/07fb3452c4640d881a16d08c2e314f3e.jpg"
    }
];

const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

    return (
        <div className="reviews-container">
            <div className="review-card">
                <div className="review-header">
                    <div className="reviewer-info">
                        <span className="avatar">
                            {currentReview.avatar && currentReview.avatar.startsWith('http') ? (
                                <img src={currentReview.avatar} alt={`${currentReview.name} avatar`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            ) : (
                                currentReview.avatar
                            )}
                        </span>
                        <div>
                            <h3 className="reviewer-name">{currentReview.name}</h3>
                            <div className="rating">
                                {[...Array(currentReview.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="review-date">{new Date(currentReview.date).toLocaleDateString()}</span>
                </div>
                <p className="review-comment">{currentReview.comment}</p>
                <div className="review-navigation">
                    <button onClick={prevReview} className="nav-button">←</button>
                    <div className="review-dots">
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <button onClick={nextReview} className="nav-button">→</button>
                </div>
            </div>
        </div>
    );
};

export default Reviews; 