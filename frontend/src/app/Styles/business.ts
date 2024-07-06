import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
`;

export const MainContent = styled.div`
    flex: 1;
    width: 100%;
    padding: 24px;
`;

export const Section = styled.section`
    display: grid;
    width: 100%;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 340px;
    height: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const ItemBody = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-size: 1.7rem;
        font-weight: bold;
        padding: 20px;
    }

    div{
        max-width: 340px;
    }
`;

export const BestSeller = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 12px;
        width: 80px;
        height: 80px;
        object-fit: contain;
    }
`