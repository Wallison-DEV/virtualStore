import { useEffect, useState } from 'react';
import { IoBasketballOutline, IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import { TbBabyCarriage } from "react-icons/tb";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GiHealthCapsule } from "react-icons/gi";
import { FaMobileAlt, FaTshirt, FaCouch, FaBook, FaAppleAlt, FaCar, FaDog } from 'react-icons/fa';
import * as S from './styles';
import StoreLogo from '@/app/assets/img/store_logo.png';
import Image from "next/image";

const categories = [
    { icon: FaMobileAlt, label: 'Electronics & Technology' },
    { icon: FaTshirt, label: 'Fashion & Accessories' },
    { icon: FaCouch, label: 'Home & Kitchen' },
    { icon: GiHealthCapsule, label: 'Beauty & Personal Care' },
    { icon: IoBasketballOutline, label: 'Sports & Outdoors' },
    { icon: TbBabyCarriage, label: 'Baby & Kids' },
    { icon: GiHealthCapsule, label: 'Health & Wellness' },
    { icon: FaBook, label: 'Books & Media' },
    { icon: FaAppleAlt, label: 'Food & Beverages' },
    { icon: FaCar, label: 'Automotive & Tools' },
    { icon: FaDog, label: 'Pet Shop' },
    { icon: IoHomeOutline, label: 'Outdoors & Gardening' },
];

const Header = () => {
    const [user, setUser] = useState<Client | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userString = localStorage.getItem('user');
            const user: Client | null = userString ? JSON.parse(userString) : null;
            setUser(user);
        }
    }, []);

    return (
        <S.StyledHeader>
            <nav>
                <div className='address'>Delivering To {user ? (user.address.length > 0 ? user.address[0].address : 'Nashville, 1337') : 'Nashville, 1337'}</div>
                <div className='logo'><Image src={StoreLogo} alt="Store Logo" width={100} height={50} /></div>
                <div className='flex-item'>
                    <div className="username">Hello, {user ? (user.username ? user.username : 'sign in') : 'sign in'}</div>
                    <S.CartButton href='cart/'>
                        <span>
                            <PiShoppingCartSimpleLight size={32} />
                        </span>
                        <span>0 Items</span>
                    </S.CartButton>
                </div>
            </nav>
            <S.SearchBar>
                <div>
                    <input type="text" id="input-search" placeholder="Search..." />
                    <button>
                        <IoSearchSharp />
                    </button>
                </div>
            </S.SearchBar>
            <nav>
                {categories.map((category, index) => (
                    <S.CategoryNavItem key={index}>
                        <category.icon size={24} />
                        <p>{category.label}</p>
                    </S.CategoryNavItem>
                ))}
            </nav>
        </S.StyledHeader>
    );
}

export default Header;
