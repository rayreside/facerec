import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    ${'' /* background-image: ${({ theme }) => theme.img}; */}
    ${'' /* background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat; */}
    color: ${({ theme }) => theme.text};
    -webkit-transition: all 0.25s linear;
    transition: all 0.25s linear;
  }
  
  #btnToggle {
    background: ${({ theme }) => theme.btn};
    transition: all 0.25s linear;
  }
  `