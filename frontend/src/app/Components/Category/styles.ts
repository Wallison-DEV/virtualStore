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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: ${(props) => props.theme.backgroundColor};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
        max-width: 295px;
        max-height: 300px;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: cover;
    }

    h2 {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 16px;
        color: ${(props) => props.theme.primaryTextColor};
    }

    a {
        color: ${(props) => props.theme.primaryButton};
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
        align-self: flex-start;
        transition: color 0.3s, text-decoration 0.3s;

        &:hover {
            text-decoration: underline;
            color: ${(props) => props.theme.primaryButtonHover};
        }
    }
`;

export const StyledCategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: 100%;
    padding: 24px 8px;
    justify-items: center;
    align-items: stretch;
`;
