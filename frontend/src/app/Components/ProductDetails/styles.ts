import styled from "styled-components";

export const StyledProductDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    padding: 24px;
`

export const DetailsTitle = styled.h1`
    font-size: 25px;
    font-weight: 500;
`

export const ImagesDiv = styled.div`
    display: flex;

    .minimized-imgs{
        width: 70px;
        padding: 0;
        
        button{
            background: none;
            border: 1px solid ${(props)=> props.theme.borderColor};
            border-radius: 8px;
            overflow: hidden;
            height: 70px;
            margin-bottom: 12px;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
    
    .featured-img{
        width: 100%;
        padding: 0 24px;
        display: flex;
        justify-content: center;
        
        img{
            max-width: 350px;
            max-height: 489px;
        }
    }
`

export const FinancingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-sie: 1.4rem;
    margin: 16px 0 ;

    .financing{
        span{
            font-size: 1.6rem;
            font-weight: 700; 
        }
        font-size: 0.9rem;
    }
`
export const SeparadorVertical = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
`;

export const SeparadorLinha = styled.div`
    height: 12px;
    width: 1px;
    background-color: ${(props) => props.theme.borderColor};
    margin: 0 auto; 
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    .current{
        font-size: 1.8rem;
        font-weight: 700;
    }

    span {
        background: ${(props) => props.theme.primaryButton};
        padding: 4px 8px;
        color: #fff ;
        font-weight: 600;
    }
    .discount{
        div{
            margin-top: 4px;
            color: ${(props)=> props.theme.borderColor};
        }
    }
`
export const About = styled.div`
    h1 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
    }
    p {
        font-size: 14px;
        line-height: 20px;
    }
`