import React, { useState } from "react";
import { navigate } from 'hookrouter';
import FormSelect from '../../components/Form/FormSelect'
import {languages, countries, categories} from '../../components/Form/FormData'

const Home = () => {
  const [languagesChosen, handleChangeLanguages] = useState([]);
  const [countriesChosen, handleChangeCountries] = useState([]);
  const [categoriesChosen, handleChangeCategories] = useState([]);

  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem("languagesChosen", JSON.stringify(languagesChosen));
    localStorage.setItem("countriesChosen", JSON.stringify(countriesChosen));
    localStorage.setItem("categoriesChosen", JSON.stringify(categoriesChosen));
    navigate('/news');
  }

  return (
    <div data-testid='homeContainer'>
      <header className="center" data-testid='headerContainer'>
        <h1>WELCOME TO NWS</h1>
        <p>tell us what you want to read</p>
      </header>
      <form>
        <label>Languages</label>
        <FormSelect selectOptions={[...languages]} onChange={(e) => handleChangeLanguages(e.map(option => option.value))}/>
        <label>Countries</label>
        <FormSelect selectOptions={[...countries]} onChange={(e) => handleChangeCountries(e.map(option => option.value))}/>
        <label>Topics</label>
        <FormSelect selectOptions={[...categories]} onChange={(e) => handleChangeCategories(e.map(option => option.value))}/>
        <div className="center">
          <button data-testid='formButton' onClick={(e) => submitForm(e)}>Let&apos;s Go</button>
        </div>
        
      </form>
      
    </div>
  );
};

export default Home;