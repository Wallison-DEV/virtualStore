import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

const StarRatingWrapper = styled.div`
    font-size: 24px;
    color: #FFD700;
    `;

const Star = styled.span`
    color: #FFD700;
    cursor: pointer;
`;

const StarRating = ({ rating, onChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseOver = (index: SetStateAction<number>) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index: number) => {
        onChange(index);
    };

    return (
        <StarRatingWrapper>
            {[...Array(5)].map((_, index) => {
                const starNumber = index + 1;
                return (
                    <Star
                        key={index}
                        onMouseOver={() => handleMouseOver(starNumber)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starNumber)}
                    >
                        {index < (hoverRating || rating) ? '★' : '☆'}
                    </Star>
                );
            })}
        </StarRatingWrapper>
    );
};

export default StarRating;
