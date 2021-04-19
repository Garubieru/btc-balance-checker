import { createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }


  html, body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;

    background: ${theme.colors.colorBlack};
  }

  html,
  body,
  input,
  button {
    font: 500 1.6rem Nunito;
    color: ${theme.colors.colorWhite};
  }

  #root {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    :root {
      font-size: 60%;
    }
  }
`;
