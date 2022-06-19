import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing:border-box;
  }
  ${normalize}
  html, body { 
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    display: flex;
    min-height:100vh;
    width: 100%;
    scroll-behavior: smooth;
  }

  #__next { 
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  //override particle.js
  #tsparticles > canvas { 
    position: absolute !important;
    z-index:: -999 !important;
  }

  //adjust body-margin due to fixed menu on desktop
  #projetos, #contato { 
    padding-top: 180px;
    margin-top: -180px;
  }
  @media(min-width: 768px) {
    body {
      padding-top: 60px;
    }
  }
`;

export default GlobalStyle;
