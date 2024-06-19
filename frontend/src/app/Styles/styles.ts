import {createGlobalStyle, styled} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        color: ${(props)=> props.theme.primaryText};
    }
    body {
        background-color: ${(props)=> props.theme.backgroundColor};
    }
    .container{
        max-width: 1310px;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .logo{
        width: 48px;
        height: 48px;
    }
`

export const Container = styled.div`
    display: flex;
    height: 100%;
    min-height: 100vh;
    max-width: 1310px;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 24px;
`

export const PrimaryTitle = styled.h1`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
`
export const SecondaryTitle = styled.h2`
    font-size: 21px;
    font-weight: 700;
`
export const TertiaryTitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
`
export const QuaternaryTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
`