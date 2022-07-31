import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 3px solid #232323;
    }
    ::-webkit-scrollbar-button {
        display:none;
    }

    @keyframes Top {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }}
    @keyframes moveL {
    0%{
        opacity: 0;
        transform: translateX(-100px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }}
`