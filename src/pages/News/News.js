import React, {useState, useEffect} from "react";
import { languages, countries, topics } from '../../components/Form/FormData';

const News = () => {
  const token = process.env.REACT_APP_GNEWS
  const languagesArray = JSON.parse(localStorage.getItem('languagesChosen'))
  const countriesArray = JSON.parse(localStorage.getItem('countriesChosen'))
  const topicsArray = JSON.parse(localStorage.getItem('topicsChosen'))

  const [articles, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://restcountries.eu/rest/v2/all`)
        const articles = await res.json()
        setData(articles)
      } catch {
        console.log('error')
      }
    }
    getData()
    
  }, []);

  return (
    <div data-testid='newsContainer'>
      <header data-testid='headerContainer'>
        <h1>NWS</h1>
        <h2>Your Headlines - Fast</h2>
      </header>
      {
        topicsArray.map(topic => {
          return <div key={topic}>{topic}</div>
        })
      }
      {
        countriesArray.map(country => {
          const countryLabel = countries.find(countryObj => countryObj.value === country).label
          return <div key={country}>{countryLabel}</div>
        })
      }
      {
        articles && articles.map(article => {
          return <div key={article.name}>{article.name}</div>
        })
      }
    </div>
  );
};

export default News;