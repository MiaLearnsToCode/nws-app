import styled from 'styled-components';

const Footer = styled.footer`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.text};;
  font-size: 15px;
  margin-top: 50px;
  text-align: center;
  padding: 20px;
  line-height: 30px;
  a {
    color: ${props => props.theme.text};;
  }
`;

export default Footer;