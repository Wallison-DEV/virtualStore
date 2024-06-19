import styled from "styled-components";

export const RatingDiv = styled.div`
    width: 100%;
    display: flex;
`

export const RatingList = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    gap: 8px;
`

export const StarRatingItem = styled.div`
    display: flex;
    align-items: center;
`;

export const Star = styled.span`
    margin-right: 8px;
`;

export const ProgressBar = styled.div`
    height: 8px;
    width: 100px; 
    background-color: #ccc;
    border-radius: 4px;
    overflow: hidden;
`;

export const Progress = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: ${(props) => props.theme.primaryButton};
    border-radius: 4px;
`;


export const Comment = styled.div`
    font-size: 14px;
    padding: 12px 0;
    header {
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 19px;
        gap: 8px;

        img{
            width: 34px;
            height: 34px;
            border-radius: 50%;
        }
    }

    .classification {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    
    .data{
        color: ${(props)=> props.theme.borderColor};
    }
`