import styled from "styled-components";

export const StyledItemsList = styled.div`
    margin:24px;
    position: relative;
    border: 1px solid ${(props)=> props.theme.backgroundColor};
    overflow: hidden; 

    >div{
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        position: relative;
        z-index: 1;
    }

    >div > * {
        border-right: 1px solid ${(props)=> props.theme.borderColor};
        border-bottom: 1px solid ${(props)=> props.theme.borderColor};
    }

    >div > *:nth-child(-n + 4) {
        border-top: none; 
    }

    >div > *:nth-last-child(-n + 4) {
        border-bottom: none;
    }

    >div > *:nth-child(4n + 1) {
        border-left: none; 
    }

    >div > *:nth-child(4n) {
        border-right: none; 
    }
`
