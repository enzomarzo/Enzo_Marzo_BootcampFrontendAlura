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

  //ajustando o margin body por conta do fixed menu no desktop
  #projetos, #contato { 
    padding-top: 200px;
    margin-top: -200px;
  }
  @media(min-width: 768px) {
    body {
      margin-top: 60px;
    }
  }
`;

export default GlobalStyle;
