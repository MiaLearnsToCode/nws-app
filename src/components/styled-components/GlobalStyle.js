import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');
  
  * {
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    margin: 0px;
  }

  main {
    min-height: 90vh;
  }

  button {
    background-color: #00FFB2;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #00FFB2; 
  }
  
  .center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  small {
    margin: 20px;
    color: ${props => props.theme.text};
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;