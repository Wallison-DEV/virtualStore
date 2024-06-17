import StarRating from "../../Components/StarRating"
import { Separador } from "../Login/styles"

import * as S from './styles'

const ProductDetails = () => {
    return (
        <div className="container">
            <S.StyledProductDetails >
                <div>
                    <div>
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=120;maxWidth=120" alt="" />
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=120;maxWidth=120" alt="" />
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=120;maxWidth=120" alt="" />
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=120;maxWidth=120" alt="" />
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=120;maxWidth=120" alt="" />
                    </div>
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg;maxHeight=640;maxWidth=550" alt="" />
                </div>
                <div>
                    <h1>
                        Samsung - 4.5 Cu. Ft. High Efficiency Stackable Smart Front Load Washer with Vibration Reduction Technology+ - White
                    </h1>
                    <StarRating rating={undefined} onChange={undefined} />
                    <div>
                        <div id='current'>
                            <span>Current $Price</span>
                        </div>
                        <div id='discount'>
                            <span>Save $390</span> Last Price
                        </div>
                        <Separador>or</Separador>
                        <div id='financing'>
                            <span>$35.00/mo</span>
                            <p>18-Month Financing</p>
                        </div>
                        <div>
                            <h1>About this item</h1>
                            <p>
                                XBOX SERIES S 1TB: Go all digital and experience next-gen speed and performance. Double the fun with double the storage.
                                FASTER LOAD TIMES: Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture.
                                IN THE BOX: Xbox Series S 1TB console, one Xbox Wireless Controller, an ultra high-speed HDMI cable, power cable, and 2 AA batteries.
                                SURROUND SOUND: Enhance gameplay with both full-spectrum visuals and immersive audio with Dolby Vision and Dolby Atmos.
                                DISCOVER YOUR NEXT FAVORITE GAME: Get the most out of your Xbox Series S with Xbox Game Pass Ultimate (membership sold separately) and be the first to play new games like Starfield and Forza Motorsport on day one.
                            </p>
                        </div>
                    </div>
                </div>
            </S.StyledProductDetails>
            <div>
                <h1>
                    Rating
                </h1>
            </div>
        </div>
    )
}

export default ProductDetails