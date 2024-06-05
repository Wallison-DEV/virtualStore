import styled from "styled-components";
import { InputDiv } from "../Login/styles";
import { PrimaryTitle } from "../../styles";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
`
export const CheckoutDiv = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: center;
`
export const CheckoutForm = styled.form`
    width: 100%;
    width: 758px;
    padding: 12px 20px;
    border: 1px solid ${(props)=> props.theme.borderColor};
    font-size: 14px;
    border-radius: 8px;

    label {
        font-weight: 700;
    }

    ${InputDiv}{
        input {
            outline: none;
            border: 1px solid ${(props)=> props.theme.borderColor};
            box-shadow: rgba(15, 17, 17, 0.15) 0px 1px 2px 0px ; 
        }
        margin-bottom: 8px;
    }

    .row{
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .maxWidth-124{
        width: 124px;
    }
    .maxWidth-48 {
        width: 48px;
    }
`

export const SumaryOrder = styled.div`
    position: sticky;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    top: 12px;
    width: 100%;
    max-width: 288px;
    padding: 12px 20px;
    height: 200px;
    border: 1px solid ${(props)=> props.theme.borderColor};
    border-radius: 8px;
`

export const KeyPairValue = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 8px;
`

export const TotalPairValue = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    border-top: 1px solid ${(props)=> props.theme.borderColor};
    padding-top: 8px;

    *{
        color: ${(props)=> props.theme.primaryButton};
    }
`

export const ListForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ConfirmForm = styled(CheckoutForm)`
    flex-direction: column;
`

export const CartItem = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    img {
        width: 80px;
        height: auto;
    }

    h4 {
        font-size: 16px;
        margin: 0;
    }

    span {
        font-size: 14px;
    }

    select {
        width: 100px;
        height: 30px;
        border: 1px solid ${(props) => props.theme.borderColor};
        border-radius: 4px;
        padding: 4px;
    }

    h5 {
        font-size: 16px;
    }

    h6 {
        font-size: 14px;
        margin: 0;
    }

    p {
        font-size: 14px;
        margin: 0;
    }

    .checkDetails {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`

export const ConfirmDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    button {
        width: 240px;
    }

    ${PrimaryTitle}>span {
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.primaryButton};
    }
`
