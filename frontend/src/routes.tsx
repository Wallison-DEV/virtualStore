import { Route, Routes } from 'react-router-dom';

import { Container } from './styles';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const Rotas = () => {
    return (
        <Container>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
            </Routes>
        </Container>
    )
}

export default Rotas
