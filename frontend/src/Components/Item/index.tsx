import Button from '../Button'
import StarRating from '../StarRating'
import * as S from './styles'

const Item = () => {
    return (
        <S.StyledItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiQjyshIAgxSadkIkXsKAUlJTJfleuW6teg&s" alt="" />
            <a>
                Samsung - 4.5 Cu. Ft. High-Efficiency Top Load Washer with Vibration Reduction Technology+ - White
            </a>
            <div id='rating'>
                <StarRating rating={undefined} onChange={undefined} />
                <span>(rating)</span>
            </div>
            <div id='current'>
                <span>Current $Price</span>
            </div>
            <div id='discount'>
                <span>Save $390</span> Last Price
            </div>
            <Button variant='blue'>
                <span>See details</span>
            </Button>
            <Button variant='orange'>
                <span>Add to cart</span>
            </Button>
        </S.StyledItem>
    )
}

export default Item