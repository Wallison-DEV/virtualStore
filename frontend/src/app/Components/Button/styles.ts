import styled from "styled-components";

export const ButtonStyle = styled.button<Omit<ButtonProps, 'children'| 'type' | 'className' | 'onClick'>>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${(props) => (props.maxwidth ? `${props.maxwidth}` : '100%')};
    height: 38px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    
    appearance: none;
    font: inherit;
    padding: 1em 1.5em;
    position: relative;
    transition: filter var(--motion-duration), transform var(--motion-duration) var(--motion-ease);
    
    border: ${(props) => (props.variant == 'light' ? '1px solid #111' : 'none')};

    background: ${(props) => {
            switch (props.variant) {
                case 'blue':
                    return props.theme.blueButton;
                case 'light':
                    return props.theme.lightButton;
                default:
                    return props.theme.primaryButton;
            }
        }
    };
    
    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        filter: brightness(0.9);
    }

    & > span {
        display: block;
        position: relative;
        transition: transform var(--motion-duration) var(--motion-ease);
        z-index: 1;
        font-size: 1rem;
        color: ${(props) => (props.variant == 'light' ? `#111` : '#fff')};
        font-weight: 500;
    }

    &:hover > span {
        transform: scale(1.05);
    }

    &:active > span {
        transform: scale(0.95);
    }

        
`
export const ButtonLink = styled(ButtonStyle).attrs({ as: 'a' })`
    text-decoration: none;
`