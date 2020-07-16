import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  #root {
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }


  body {
    background: rgb(140, 140, 140);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
    
  body, input, button {
    font-family: Roboto, sans-serif, Arial, Helvetica;
    font-size: 16px;
  }
  

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
