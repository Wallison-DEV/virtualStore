import styled from "styled-components";

export const ButtonStyle = styled.button<Omit<ButtonProps, 'children'| 'type' | 'className'>>`
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
    border: none;
    
    appearance: none;
    background: transparent;
    font: inherit;
    padding: 1em 1.5em;
    position: relative;
    transition: filter var(--motion-duration), transform var(--motion-duration) var(--motion-ease);
    
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
        color: #fff;
        font-weight: 500;
    }

    &:hover > span {
        transform: scale(1.05);
    }

    &:active > span {
        transform: scale(0.95);
    }

    & > svg {
        fill: #950cde;
        position: absolute;
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
        transition: var(--motion-duration) var(--motion-ease);
    }

    & > svg > path {
        transition: var(--motion-duration) var(--motion-ease);
    }

    &:hover > svg > path {
        d: path("M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0");
    }

    &:active > svg > path {
        d: path("M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0");
    }
`