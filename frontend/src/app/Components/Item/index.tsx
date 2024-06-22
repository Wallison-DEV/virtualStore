import Button from '../Button';
import StarRating from '../StarRating';
import * as S from './styles';

const Item = ({ name, imageUrl, rating, currentPrice, discount, lastPrice }) => {
    return (
        <S.StyledItem>
            <img src={imageUrl} alt={name} />
            <a>
                {name}
            </a>
            <div id='rating'>
                <StarRating rating={rating} onChange={undefined} />
                <span>({rating})</span>
            </div>
            <div id='current'>
                <span>Current ${currentPrice}</span>
            </div>
            <div id='discount'>
                <span>Save ${discount}</span> Last Price ${lastPrice}
            </div>
            <Button variant='blue'>
                <span>See details</span>
            </Button>
            <Button variant='orange'>
                <span>Add to cart</span>
            </Button>
        </S.StyledItem>
    );
}

export default Item;
