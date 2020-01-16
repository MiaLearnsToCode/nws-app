import styled from 'styled-components';

const NavigationButton = styled.button`
  border:  none;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 3px solid #00FFB2;
  background-color: transparent;
  padding: 5px 10px;
  font-size: 12px;
  margin: 10px 25px 0px 0px;
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.text};
  
  @media screen and (min-width: 900px) { 
    font-size: 20px;
    margin-left: 35px;
  }

`;

export default NavigationButton;