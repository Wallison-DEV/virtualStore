import { IoGameControllerOutline, IoBasketballOutline, IoHomeOutline, IoTvOutline } from "react-icons/io5";
import { TbBabyCarriage } from "react-icons/tb";
import { GiClothes, GiHealthCapsule } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

import * as S from './styles'
import StoreLogo from '@/app/assets/img/store_logo.png'
import Image from "next/image";

const Header = () => {
    return (
        <S.StyledHeader>
            <nav>
                <div className="navItem">Delivery To</div>
                <div className="navItem"><Image className="logo" src={StoreLogo} alt="" /></div>
                <div>
                    <div className="navItem">Hello, sign in</div>
                    <div className="navItem">Cart</div>
                </div>
            </nav>
            <S.SearchBar>
                <div>
                    <input type="text" id="input-search" />
                    <button>
                        <IoSearchSharp id="search-icon" />
                    </button>
                </div>
            </S.SearchBar>
            <nav>
                <S.CategoryNavItem>
                    <IoGameControllerOutline size={24} />
                    <p>Video Games</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <svg width={24} height={24} version="1.1" viewBox="0 0 393.43 393.43" xmlns="http://www.w3.org/2000/svg">
                        <path d="m114.18 181.56h-4.31v-34.948c0-4.142-3.357-7.5-7.5-7.5h-0.644v-71.5c0-2.84-1.604-5.437-4.146-6.708l-58.04-29.028c-2.324-1.162-5.085-1.039-7.297 0.328-2.212 1.366-3.558 3.78-3.558 6.38v100.53h-0.644c-4.143 0-7.5 3.358-7.5 7.5v34.948h-4.317c-4.143 0-7.5 3.358-7.5 7.5v196.87c0 4.142 3.357 7.5 7.5 7.5h97.954c4.143 0 7.5-3.358 7.5-7.5v-196.87c2e-3 -4.142-3.355-7.5-7.498-7.5zm-70.493-130.84 43.04 21.526v66.865h-43.04v-88.391zm-8.143 103.39h59.327v27.448h-59.327v-27.448zm71.136 224.32h-82.954v-181.87h82.954v181.87z" />
                        <path d="m377.2 304.28h-243.6c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h231.67l-1.715 3.565c-9.421 19.576-29.546 32.226-51.271 32.226h-178.68c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h178.68c27.453 0 52.884-15.984 64.787-40.722l6.89-14.317c1.119-2.324 0.965-5.06-0.408-7.243s-3.771-3.509-6.35-3.509z" />
                        <path d="m116.28 55.149c27.965-25.89 64.369-40.149 102.51-40.149 83.214 0 150.91 67.7 150.91 150.91 0 44.863-19.769 87.106-54.236 115.9-3.18 2.656-3.604 7.385-0.948 10.564 1.483 1.776 3.613 2.692 5.76 2.692 1.695 0 3.401-0.572 4.804-1.744 37.891-31.649 59.621-78.088 59.621-127.41-1e-3 -91.484-74.43-165.91-165.92-165.91-41.929 0-81.952 15.677-112.7 44.143-3.039 2.814-3.222 7.559-0.408 10.599 2.813 3.038 7.558 3.221 10.599 0.407z" />
                        <path d="m218.79 46.194c66.016 0 119.72 53.708 119.72 119.72s-53.708 119.72-119.72 119.72c-29.679 0-58.147-10.938-80.163-30.797-3.074-2.774-7.817-2.531-10.593 0.545-2.774 3.075-2.53 7.818 0.546 10.592 24.776 22.351 56.813 34.66 90.21 34.66 74.287 0 134.72-60.437 134.72-134.72s-60.437-134.72-134.72-134.72c-42.665 0-83.253 20.54-108.57 54.945-2.456 3.336-1.741 8.031 1.595 10.486 3.336 2.454 8.029 1.741 10.486-1.595 22.504-30.579 58.576-48.836 96.491-48.836z" />
                        <path d="m301.3 106.83-136.87 136.87c-2.929 2.929-2.929 7.678 0 10.606 1.465 1.464 3.385 2.197 5.304 2.197s3.839-0.732 5.304-2.197l136.87-136.87c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0z" />
                        <path d="m206.11 244.63c-2.929 2.929-2.929 7.678 0 10.606 1.465 1.464 3.385 2.197 5.304 2.197s3.839-0.732 5.304-2.197l102.76-102.76c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-102.76 102.76z" />
                    </svg>
                    <p>Personal Care</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <IoTvOutline size={24} />
                    <p>Television</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <GiClothes size={24} />
                    <p>Fashion</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <TbBabyCarriage size={24} />
                    <p>Baby</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <GiHealthCapsule size={24} />
                    <p>Health</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <IoHomeOutline size={24} />
                    <p>Header</p>
                </S.CategoryNavItem>
                <S.CategoryNavItem>
                    <IoBasketballOutline size={24} />
                    <p>Sports</p>
                </S.CategoryNavItem>
            </nav>
        </S.StyledHeader>
    )
}

export default Header