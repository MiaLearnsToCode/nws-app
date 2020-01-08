import React from "react";
import HttpSources from "../../components/Http/HttpSources";

const News = () => {
  const languagesArray = JSON.parse(localStorage.getItem('languagesChosen'))
  const countriesArray = JSON.parse(localStorage.getItem('countriesChosen'))
  const categoriesArray  = JSON.parse(localStorage.getItem('categoriesChosen'))

  return (
    <div data-testid='newsContainer'>
      <header data-testid='headerContainer'>
        <h1>NWS</h1>
        <h2>Your Headlines - Fast</h2>
      </header>
      {
        categoriesArray.map(category => {
          return countriesArray.map(country => {
            return languagesArray.map(language => {
              return <HttpSources key={language} language={language} country={country} category={category}></HttpSources>
            })
          })
        })
      }
      
    </div>
  );
};

export default News;