import styled from 'styled-components'

export const LoginDiv = styled.form`
    display: flex;
    max-width: 350px;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    gap: 16px;
    border: 1px solid ${(props)=> props.theme.borderColor};
    border-radius: 8px;
    font-size: 12px;

    a {
        color: blue;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: #ff4c32;
        }
    }
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    input, select {
        margin: 4px 0;
        padding: 6px;
        border-radius: 4px;
        outline: none;
        border: 1px solid ${(props)=> props.theme.borderColor};
    }

    .error {
        color: red;
    }
`
export const Separador = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 16px 0;
    width: 350px;
    font-size: 12px;
    color: ${(props)=> props.theme.secondaryText};

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid ${(props)=> props.theme.borderColor};
    }

    &::before {
        margin-right: 16px;
    }

    &::after {
        margin-left: 16px;
    }
`;