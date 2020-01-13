import styled from 'styled-components';

const StyledArticle = styled.div`
  padding: 50px 30px;
  color: #696969;
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 35px;
    color: #696969;
    cursor: pointer;
  }
  h3 {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #00FFB2;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 25px;
  }
  
  img {
    width: 80vw;
    border-radius: 1%;
  }

  @media screen and (min-width: 900px) {
    margin: 5% 20%;

    a {
      font-size: 30px;
      line-height: 60px;
    }
    h3 {
      font-size: 18px;
      letter-spacing: 5px;
    }
    p {
      font-size: 18px;
      line-height: 25px;
    }
    img {
      width: 50vw;
    }
  }
`;

export default StyledArticle;