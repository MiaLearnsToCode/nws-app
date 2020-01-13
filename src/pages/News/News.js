import React, { useState } from "react";

// styled components
import Header from '../../components/styled-components/Header'
import CategoryButton from '../../components/styled-components/styled-buttons/CategoryButton'

// other components
import Http from "../../components/Http/Http";

const News = () => {
  const languagesArray = JSON.parse(localStorage.getItem('languagesChosen'))
  const countriesArray = JSON.parse(localStorage.getItem('countriesChosen'))
  const categoriesArray  = JSON.parse(localStorage.getItem('categoriesChosen'))
  const [chosenCategory, pickCategory] = useState();
  
  const handleClick = (category) => {
    window.scrollTo(0, 0)
    pickCategory(category)
  }

  return (
    <div data-testid='newsContainer'>
      <Header data-testid='headerContainer'>
        <h1>NWS</h1>
        <h2>Your Headlines</h2>
        <nav className="center" data-testid='navContainer'>
          {
            categoriesArray && categoriesArray.map((category,i) => {
              return <CategoryButton onClick={() => handleClick(category)} key={i}>{category}</CategoryButton>
            })
          }
        </nav>
      </Header>
      <div className="news-feed">
        {
          categoriesArray && countriesArray && languagesArray && categoriesArray.map(category => {
            return countriesArray.map(country => {
              return languagesArray.map((language, i) => {
                return <Http key={i} language={language} country={country} category={category} chosenCategory={chosenCategory} handleClick={handleClick}></Http>
              })
            })
          })
        }
      </div>
      
      
    </div>
  );
};

export default News;