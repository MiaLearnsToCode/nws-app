import React, { useState } from 'react';
import { navigate } from 'hookrouter';

// styled components
import Header from '../../components/styled-components/Header';
import Form from '../../components/styled-components/Form';
import SubmitButton from '../../components/styled-components/styled-buttons/SubmitButton';

// other components
import FormSelect from '../../components/Form/FormSelect';
import {languages, countries, categories} from '../../components/Form/FormData';

const Home = () => {
  const [languagesChosen, handleChangeLanguages] = useState([]);
  const [countriesChosen, handleChangeCountries] = useState([]);
  const [categoriesChosen, handleChangeCategories] = useState([]);
  const [completed, fieldsCompleted] = useState(true);

  const submitForm = (e) => {
    if (languagesChosen.length && countriesChosen.length && categoriesChosen.length) {
      e.preventDefault()
      localStorage.setItem('languagesChosen', JSON.stringify(languagesChosen));
      localStorage.setItem('countriesChosen', JSON.stringify(countriesChosen));
      localStorage.setItem('categoriesChosen', JSON.stringify(categoriesChosen));
      navigate('/news');
    } else {
      e.preventDefault()
      fieldsCompleted(!completed)
    }
    
  };

  return (
    <div data-testid='homeContainer'>
      <Header className='center' data-testid='headerContainer'>
        <h1>WELCOME TO NWS</h1>
        <p>tell us what you want to read</p>
      </Header>
      <Form>
        <label>Languages</label>
        <FormSelect selectOptions={[...languages]} onChange={(e) => handleChangeLanguages(e.map(option => option.value))}/>
        <label>Countries</label>
        <FormSelect selectOptions={[...countries]} onChange={(e) => handleChangeCountries(e.map(option => option.value))}/>
        <label>Categories</label>
        <FormSelect selectOptions={[...categories]} onChange={(e) => handleChangeCategories(e.map(option => option.value))}/>
        <div className='center'>
          {!completed && <small>Please fill in all the fields</small>} 
          <SubmitButton data-testid='formButton' onClick={(e) => submitForm(e)}>Let&apos;s Go</SubmitButton>
        </div>
        
      </Form>
      
    </div>
  );
};

export default Home;