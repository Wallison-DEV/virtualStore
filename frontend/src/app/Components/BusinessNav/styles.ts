import styled, { css } from 'styled-components';

interface NavBarItemProps {
    active: boolean;
}

export const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;
    background-color: ${props => props.theme.backgroundColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 8px;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: ${props => props.theme.hoverBackground};
            color: ${props => props.theme.primaryButton};
        }
    }
`;

export const NavBrand = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    img {
        width: 32px;
        height: 32px;
    }

    h1 {
        font-size: 1.2rem;
        color: ${props => props.theme.primaryText};
        font-weight: 600;
    }
`;

export const NavBarText = styled.div`
    font-size: 0.75rem;
    color: ${props => props.theme.secondaryText};
    transition: color 0.3s ease, transform 0.3s ease;
`;

export const NavBarIcon = styled.div`
    font-size: 1.2rem;
    margin-bottom: 4px;
    svg {
        fill: ${props => props.theme.secondaryText};
        transition: fill 0.3s ease, transform 0.3s ease;
    }
`;

export const NavBarItem = styled.div<NavBarItemProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.hoverBackground};
        transform: translateY(-2px);

        ${NavBarText}, ${NavBarIcon} {
            color: ${props => props.theme.primaryButton};
            svg {
                fill: ${props => props.theme.primaryButton};
            }
        }
    }

    ${props => props.active && css`
        background-color: ${props => props.theme.activeBackground};

        ${NavBarText}, ${NavBarIcon} {
            color: ${props => props.theme.primaryButton};
            svg {
                fill: ${props => props.theme.primaryButton};
            }
        }
    `}
`;

export const MainContent = styled.div`
    flex: 1;
    padding: 20px;
`;
