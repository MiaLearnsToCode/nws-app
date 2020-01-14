import React, { useState, useEffect } from 'react';
import Newsfeed from '../Newsfeed/Newsfeed';

const Http = ({ language, country, category, chosenCategory, handleClick }) => {

  const token = process.env.REACT_APP_NEWS;
  const [articles, setData] = useState([]);

  useEffect(() => {
    const getArticlesData = async (source) => {   
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source.id}&apiKey=${token}`);
        let articles = await res.json();
        articles = articles.articles.map(article => {
          article.country = country;
          article.category = category;
          return article;
        });
        if (articles.length) setData(articles);
      } catch(error) {
        console.log(error);
      };
    };

    const getSourcesData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/sources?language=${language}&country=${country}&category=${category}&apiKey=${token}`)
        let sources = await res.json()
        if (sources.sources.length) sources.sources.map(memoize(getArticlesData))
      } catch (error) {
        console.log(error)
      };
    };

    

    const memoize = (method) => {
      return async function () {
        let cache = {};
        let args = JSON.stringify(arguments);
        cache[args] = cache[args] || method.apply(this, arguments);
        console.log(cache[args]);
        return cache[args];
      };
    }

    const data = memoize(getSourcesData);
    
    data();

  }, [category, country, language, token]);

  return (
    <div>
      <Newsfeed chosenCategory={chosenCategory} articles={articles} handleClick={handleClick}/>
    </div>
  );
};

export default Http;