import styled from "styled-components";

export const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 504px;
    width: 100%;
    max-width: 240px;
    padding: 20px;
    
    img{
        max-width:209px;
        max-height: 180px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a{
        color: ${(props) => props.theme.primaryText};
        text-decoration: none;
        cursor: pointer;
        font-size: 13px;
        font-weight: 400;

        &:hover{
            text-decoration: underline;
        }
    }

    #rating{
        color: ${(props) => props.theme.primaryText};
        display: flex;
        align-items: center;
        gap: 4px;
    }

    #current {
        font-size: 25px;
        font-weight: 500;
    }
    #discount{
        
        font-size: 13px;
        font-weight:400;
        span {
            background: ${(props) => props.theme.primaryButton};
            padding: 4px 8px;
            color: #FFDAB9 ;
            font-weight: 600;
        }
    }
`