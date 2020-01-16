import styled from 'styled-components';

const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');
  
  padding: 40px;
  h1 {
    font-family: 'Raleway', sans-serif;
    color: #00FFB2;
    font-size: 40px;
    line-height: 80px;
    letter-spacing: 15px;
    text-align: center;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.text};
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 5px;
    text-align: center;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.text};
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 5px;
  }
  
  nav {
    margin-top: 80px;
  }

  @media screen and (min-width: 900px) { 
    h2 {
      font-size: 80px;
    }

    nav {
      margin: 10% 20% 0% 20%;
    }

    .news-feed {
      margin: 0px 20%;
    }
  }
`;

export default Header;