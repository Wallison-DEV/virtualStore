import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: sticky;
    top: 0;
    border-bottom: 1px solid rgba(106, 106, 106, 0.4);
    z-index: 1;
    background-color: ${(props)=> props.theme.backgroundColor};

    nav{
        display: flex;
        justify-content: space-between;
        width: 100%;

        div {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            max-width: 280px;
            font-size: 12px;
            font-weight: 400;
        }
        .address {
            max-width: 280px;
            color: rgb(204, 204, 204);
        }
        .username {
            font-size: 16px;
            max-width: 280px;
        }
        .flex-item{
            flex-direction: row;
            gap: 16px;
        }
    }
`

export const CartButton = styled.a`
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    .icon{
        position: relative;
        display: flex;
        justify-content: center;
        span {
            position: absolute;
            top: 15px;
            left: 22px;
            font-weight: bold;
            color: ${(props)=> props.theme.primaryButton};
        }
    }
`


export const SearchBar = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    
    div{
        position: relative;
        width: 100%;
        max-width: 858px;

        input{
            width: 100%;
            padding: 12px;
            margin: 24px 0;
            font-size: 1.2rem;
            outline: none;
            border-radius: 48px;
            border: solid 1px rgb(221, 221, 221);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
        }
        button{
            width: 40px;
            height: 40px;
            padding: 8px;
            border: none;
            background: #950cde;
            border-radius: 50%;
            position: absolute;
            right: 8px;
            top: calc(50% - 20px); 
            cursor: pointer;
            transition: background 0.3s;

            svg{
                width: 100%;
                height: 100%;
                fill:#fff;
            }
            
            &: hover {
                background: #7a0aae;
            }
        }
    }
`

export const CategoryNavItem = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 8px;
    width: 80px;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    transition: all 0.3s;

    * {
        color: ${(props)=> props.theme.borderColor};
    }
    svg{
        fill: ${(props)=> props.theme.borderColor};
    }
    
    &:hover {
        *{
            color: #111;
        }
        svg{
            fill: #111;
        }
        border-bottom: 4px solid rgb(221, 221, 221);
    }
`