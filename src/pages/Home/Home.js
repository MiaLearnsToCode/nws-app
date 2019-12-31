import React from "react";
import FormSelect from '../../components/Form/FormSelect'
import {languages, countries, topics} from '../../components/Form/FormData'

const Home = () => {
  return (
    <div data-testid="homeContainer">
      <header data-testid="headerContainer">
        <h1>WELCOME TO NWS</h1>
        <p>tell us what you want to read</p>
      </header>
      <form>
        <label>Languages</label>
        <FormSelect selectOptions={[...languages]}/>
        <label>Countries</label>
        <FormSelect selectOptions={[...countries]}/>
        <label>Topics</label>
        <FormSelect selectOptions={[...topics]}/>
      </form>
      
    </div>
  );
};

export default Home;