import StarRating from '../StarRating'
import * as S from './styles'

import UserIcon from '../../assets/img/profile-user.png'
import { SecondaryTitle, TertiaryTitle } from '../../styles'

const Rating = () => {
    return (
        <S.RatingDiv>
            <S.RatingList>
                <SecondaryTitle>Customer reviews</SecondaryTitle>
                <S.StarRatingItem>
                    <S.Star>5 star</S.Star>
                    <S.ProgressBar>
                        <S.Progress percentage={90} />
                    </S.ProgressBar>
                </S.StarRatingItem>
                <S.StarRatingItem>
                    <S.Star>4 star</S.Star>
                    <S.ProgressBar>
                        <S.Progress percentage={6} />
                    </S.ProgressBar>
                </S.StarRatingItem>
                <S.StarRatingItem>
                    <S.Star>3 star</S.Star>
                    <S.ProgressBar>
                        <S.Progress percentage={3} />
                    </S.ProgressBar>
                </S.StarRatingItem>
                <S.StarRatingItem>
                    <S.Star>2 star</S.Star>
                    <S.ProgressBar>
                        <S.Progress percentage={1} />
                    </S.ProgressBar>
                </S.StarRatingItem>
                <S.StarRatingItem>
                    <S.Star>1 star</S.Star>
                    <S.ProgressBar>
                        <S.Progress percentage={0} />
                    </S.ProgressBar>
                </S.StarRatingItem>
            </S.RatingList>
            <div>
                <TertiaryTitle>Customers say</TertiaryTitle>
                <S.Comment>
                    <header>
                        <img src={UserIcon} alt="" />
                        <span>name</span>
                    </header>
                    <div className="classification">
                        <StarRating rating={4} onChange={undefined} /> <span>Great New Console</span>
                    </div>
                    <div className="data">
                        Reviewed on 05/06/2024
                    </div>
                    <div>
                        The Xbox Series S 1Tb came out in September 2023, and I got it that same month because I wanted a new console. So far, it has been great considering the price. I actually don't use the Game Pass because I usually get very committed to a handful of games instead of hopping around from game to game. However, the system is great for that, too. Good controls, great sound, and great performance.
                    </div>
                </S.Comment>
                <S.Comment>
                    <header>
                        <img src={UserIcon} alt="" />
                        <span>name</span>
                    </header>
                    <div className="classification">
                        <StarRating rating={5} onChange={undefined} /> <span>Great New Console</span>
                    </div>
                    <div className="data">
                        Reviewed on 05/06/2024
                    </div>
                    <div>
                        The Xbox Series S 1Tb came out in September 2023, and I got it that same month because I wanted a new console. So far, it has been great considering the price. I actually don't use the Game Pass because I usually get very committed to a handful of games instead of hopping around from game to game. However, the system is great for that, too. Good controls, great sound, and great performance.
                    </div>
                </S.Comment>
                <S.Comment>
                    <header>
                        <img src={UserIcon} alt="" />
                        <span>name</span>
                    </header>
                    <div className="classification">
                        <StarRating rating={5} onChange={() => { return }} /> <span>Great New Console</span>
                    </div>
                    <div className="data">
                        Reviewed on 05/06/2024
                    </div>
                    <div>
                        The Xbox Series S 1Tb came out in September 2023, and I got it that same month because I wanted a new console. So far, it has been great considering the price. I actually don't use the Game Pass because I usually get very committed to a handful of games instead of hopping around from game to game. However, the system is great for that, too. Good controls, great sound, and great performance.
                    </div>
                </S.Comment>
            </div>
        </S.RatingDiv>
    )
}

export default Rating