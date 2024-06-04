import styled from "styled-components";

export const CategoryList = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const CategoryItem = styled.a`
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