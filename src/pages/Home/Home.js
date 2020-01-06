import React, { useState } from "react";
import { navigate } from 'hookrouter';
import FormSelect from '../../components/Form/FormSelect'
import {languages, countries, topics} from '../../components/Form/FormData'

const Home = ({history}) => {
  const [languagesChosen, handleChangeLanguages] = useState([]);
  const [countriesChosen, handleChangeCountries] = useState([]);
  const [topicsChosen, handleChangeTopics] = useState([]);

  const submitForm = (e) => {
    e.preventDefault()
    console.log('now')
    localStorage.setItem("languagesChosen", JSON.stringify(languagesChosen));
    localStorage.setItem("countriesChosen", JSON.stringify(countriesChosen));
    localStorage.setItem("topicsChosen", JSON.stringify(topicsChosen));
    navigate('/news');
  }
  console.log(languagesChosen, topicsChosen, countriesChosen);

  return (
    <div data-testid='homeContainer'>
      <header data-testid='headerContainer'>
        <h1>WELCOME TO NWS</h1>
        <p>tell us what you want to read</p>
      </header>
      <form>
        <label>Languages</label>
        <FormSelect selectOptions={[...languages]} onChange={(e) => handleChangeLanguages(e.map(option => option.value))}/>
        <label>Countries</label>
        <FormSelect selectOptions={[...countries]} onChange={(e) => handleChangeCountries(e.map(option => option.value))}/>
        <label>Topics</label>
        <FormSelect selectOptions={[...topics]} onChange={(e) => handleChangeTopics(e.map(option => option.value))}/>
        <button data-testid='formButton' onClick={(e) => submitForm(e)}>Let&apos;s Go</button>
      </form>
      
    </div>
  );
};

export default Home;