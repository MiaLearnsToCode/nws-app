import React from "react";
import Http from "../../components/Http/Http";

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
            return languagesArray.map((language, i) => {
              return <Http key={i} language={language} country={country} category={category}></Http>
            })
          })
        })
      }
      
    </div>
  );
};

export default News;