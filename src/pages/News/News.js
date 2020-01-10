import React, { useState } from "react";
import Http from "../../components/Http/Http";

const News = () => {
  const languagesArray = JSON.parse(localStorage.getItem('languagesChosen'))
  const countriesArray = JSON.parse(localStorage.getItem('countriesChosen'))
  const categoriesArray  = JSON.parse(localStorage.getItem('categoriesChosen'))
  const [chosenCategory, pickCategory] = useState();

  return (
    <div data-testid='newsContainer'>
      <header data-testid='headerContainer'>
        <h1>NWS</h1>
        <h2>Your Headlines</h2>
        <nav className="center" data-testid='navContainer'>
          {
            categoriesArray && categoriesArray.map((category,i) => {
              return <button onClick={() => pickCategory(category)} key={i}>{category}</button>
            })
          }
        </nav>
      </header>
      {
        categoriesArray && countriesArray && languagesArray && categoriesArray.map(category => {
          return countriesArray.map(country => {
            return languagesArray.map((language, i) => {
              return <Http key={i} language={language} country={country} category={category} chosenCategory={chosenCategory}></Http>
            })
          })
        })
      }
      
    </div>
  );
};

export default News;