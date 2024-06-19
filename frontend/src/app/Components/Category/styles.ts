import styled from "styled-components";

export const StyledCategoryItem = styled.div`
    border: 1px solid ${(props)=> props.theme.borderColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 420px;
    width: 100%;
    max-width: 335px;
    padding: 20px;
    border-radius: 24px;

    img{
        max-width:295px;
        max-height: 300px;
        width: 100%;
        height: 100%;
    }

    h2{
        font-size: 21px;
        font-weight: 700;
    }

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