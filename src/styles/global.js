import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html{
   scroll-behavior: smooth;
  }

  body{
    background: linear-gradient(to right, #ce93d8, #ba68c8);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: sans-serif;
  }

  #root{
    max-width: 100%;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
