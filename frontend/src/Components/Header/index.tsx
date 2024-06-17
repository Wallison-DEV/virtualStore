import * as S from './styles'
import StoreLogo from '../../assets/img/store_logo.png'
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    return (
        <S.StyledHeader>
            <nav>
                <div className="navItem">Delivery To</div>
                <div className="navItem"><img className="logo" src={StoreLogo} alt="" /></div>
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
        </S.StyledHeader>
    )
}

export default Header