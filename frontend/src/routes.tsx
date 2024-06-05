import { Route, Routes } from 'react-router-dom';

import { Container } from './styles';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import ProfileConf from './Pages/ProfileConf';
import Search from './Pages/Search';
import Checkout from './Pages/Checkout';
import ProductPage from './Pages/ProductPage';

const Rotas = () => {
    return (
        <Container>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/category' element={<CategoryPage />} />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/configurations' element={<ProfileConf />} />
                <Route path='/search' element={<Search />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Container>
    )
}

export default Rotas
