import styled from 'styled-components';

const Form = styled.form`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');

  margin: 20px;
  font-size: 20px;
  label {
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.text};
  }
  @media screen and (min-width: 900px) {
    margin: 0 20%;  
  }
`;

export default Form;