import { Route, Routes } from 'react-router-dom';

import { Container } from './styles';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

const Rotas = () => {
    return (
        <Container>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Container>
    )
}

export default Rotas
