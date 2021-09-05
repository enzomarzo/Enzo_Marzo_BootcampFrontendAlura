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

  //sobrescrevendo responsividade do particle.js
  canvas.tsparticles-canvas-el { 
    width: 100vw !important;
    height: 100vh !important;
  }

  //ajustando o margin body por conta do fixed menu no desktop
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
