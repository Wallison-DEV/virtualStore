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
                    <p>Buying for work?</p>
                    <a>Shop on Amazon Business</a>
                </div>
            </S.LoginDiv>
            <S.Separador>New to Amazon?</S.Separador>
            <button>Create account</button>
        </div>
    )
}

export default Login