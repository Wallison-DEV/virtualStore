import Button from "../../Components/Button"
import StarRating from "../StarRating"

import * as S from './styles'

const ProductDetails = () => {
    return (
        <S.StyledProductDetails >
            <S.ImagesDiv>
                <div className="minimized-imgs">
                    <button>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                    </button>
                    <button>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                    </button>
                    <button>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                    </button>
                    <button>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                    </button>
                    <button>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                    </button>
                </div>
                <div className="featured-img">
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                </div>
            </S.ImagesDiv>
            <div>
                <S.DetailsTitle>
                    Samsung - 4.5 Cu. Ft. High Efficiency Stackable Smart Front Load Washer with Vibration Reduction Technology+ - White
                </S.DetailsTitle>
                <StarRating rating={undefined} onChange={undefined} />
                <div>
                    <S.FinancingDiv >
                        <S.Price >
                            <h1 className='current'>
                                $Price
                            </h1>
                            <div className='discount'>
                                <span>Save $390</span>
                                <div>
                                    was last
                                </div>
                            </div>
                        </S.Price>
                        <S.SeparadorVertical>
                            <S.SeparadorLinha />
                            <span>or</span>
                            <S.SeparadorLinha />
                        </S.SeparadorVertical>
                        <div className="financing">
                            <span>$35.00/mo</span>
                            <p>18-Month Financing</p>
                        </div>
                    </S.FinancingDiv>
                    <div style={{ margin: '16px 0', display: "flex", gap: '12px' }}>
                        <Button variant='orange'>
                            <span>Add to cart</span>
                        </Button>
                        <Button variant='light'>
                            <span>Save</span>
                        </Button>
                    </div>
                    <S.About>
                        <h1>About this item</h1>
                        <p>
                            XBOX SERIES S 1TB: Go all digital and experience next-gen speed and performance. Double the fun with double the storage.
                            FASTER LOAD TIMES: Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture.
                            IN THE BOX: Xbox Series S 1TB console, one Xbox Wireless Controller, an ultra high-speed HDMI cable, power cable, and 2 AA batteries.
                            SURROUND SOUND: Enhance gameplay with both full-spectrum visuals and immersive audio with Dolby Vision and Dolby Atmos.
                            DISCOVER YOUR NEXT FAVORITE GAME: Get the most out of your Xbox Series S with Xbox Game Pass Ultimate (membership sold separately) and be the first to play new games like Starfield and Forza Motorsport on day one.
                        </p>
                    </S.About>
                </div>
            </div>
        </S.StyledProductDetails>
    )
}

export default ProductDetails