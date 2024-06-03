import Button from '../../Components/Button'
import * as S from '../Login/styles'

const SignUp = () => {
    return (
        <div className="container">
            <S.LoginDiv>
                <h1>Sign up</h1>
                <S.InputDiv>
                    <label htmlFor="name">Your name</label>
                    <input id='name' type="text" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="number-mail">Mobile number or email</label>
                    <input id='number-mail' type="text" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="re-password">Re-enter password</label>
                    <input id='re-password' type="password" />
                </S.InputDiv>
                <Button maxwidth='350px'>
                    <span>Log In</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                    </svg>
                </Button>
                <p>By continuing, you agree to Store's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
                <div>
                    <p>Are you a seller?</p>
                    <a href='/business/register'>Create a free business account</a>
                </div>
                <div>
                    <p>Already have an account? <a href='/login'>Sign in</a></p>

                </div>
            </S.LoginDiv>
        </div >
    )
}

export default SignUp