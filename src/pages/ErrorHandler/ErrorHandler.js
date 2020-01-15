import React from 'react';
import { navigate } from 'hookrouter';

// styled components
import Header from '../../components/styled-components/Header';
import SubmitButton from '../../components/styled-components/styled-buttons/SubmitButton';

const ErrorHandler = () => {

  const resetLocalStorage = () => {
    localStorage.removeItem('languagesChosen');
    localStorage.removeItem('countriesChosen');
    localStorage.removeItem('categoriesChosen');
    navigate('/preferences');
  };

  return (
    <div data-testid='homeContainer'>
      <Header className='center' data-testid='headerContainer'>
        <h1>WELCOME TO NWS</h1>
        <p>...oops something went wrong!</p>
      </Header>
      <div className='center'>
        <SubmitButton data-testid='redirectButton' onClick={resetLocalStorage}>Go back to your preferences</SubmitButton>
      </div>
    </div>
  );
};

export default ErrorHandler;