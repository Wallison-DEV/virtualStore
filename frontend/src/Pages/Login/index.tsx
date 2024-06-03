import Button from '../../Components/Button'
import * as S from './styles'

const Login = () => {
    return (
        <div className="container">
            <S.LoginDiv>
                <h1>Sign in</h1>
                <S.InputDiv>
                    <label htmlFor="mail">Email or mobile phone number</label>
                    <input id='mail' type="text" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" />
                </S.InputDiv>
                <p>By continuing, you agree to Stores's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
                <div>
                    <p>Are you a seller?</p>
                    <a>Login to the Store Business</a>
                </div>
            </S.LoginDiv>
            <S.Separador>New to Amazon?</S.Separador>
            <Button maxwidth='350px'>
                <span>Create account</span>
                <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                </svg>
            </Button>
        </div>
    )
}

export default Login