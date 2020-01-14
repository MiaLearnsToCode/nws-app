import React, { useState, useEffect } from 'react';
import Newsfeed from '../Newsfeed/Newsfeed';

const Http = ({ language, country, category, chosenCategory, handleClick }) => {

  const token = process.env.REACT_APP_NEWS;
  const [articles, setData] = useState([]);

  useEffect(() => {

    //if a function is called twice with the same arguments, it will return the same cached value the second time.
    const memoize = (method) => {
      //I'm caching the promise returned by the method, not the final value. 
      //SO I don’t need to wait for the async method to return anything, before we cache it’s future value.
      return async function () {
        let cache = {};
        let args = JSON.stringify(arguments);
        cache[args] = cache[args] || method.apply(this, arguments);
        return cache[args];
      };
    }

    // 2. Get the top headlines from the sources returned from getSourcesData
    const getArticlesData = memoize(async (source) => {
      console.log('articles');
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source.id}&apiKey=${token}`);
        let articles = await res.json();
        articles = articles.articles.map(article => {
          article.country = country;
          article.category = category;
          return article;
        });
        if (articles.length) setData(articles);
      } catch (error) {
        console.log(error);
      };
    });

    // 1. first I need to get the sources that may include articles with the user's choices
    const getSourcesData = memoize(async () => {
      console.log(category);
      try {
        const res = await fetch(`https://newsapi.org/v2/sources?language=${language}&country=${country}&category=${category}&apiKey=${token}`)
        let sources = await res.json()
        if (sources.sources.length) sources.sources.map(memoize(getArticlesData))
      } catch (error) {
        console.log(error)
      };
    });

    const memoizedData = memoize(getSourcesData);
    
    //After the first call, I’ll always get a cached result, even if I call one of these methods again before it has returned for the first time.
    memoizedData();

  }, [category, country, language, token]);

  return (
    <div>
      <Newsfeed chosenCategory={chosenCategory} articles={articles} handleClick={handleClick}/>
    </div>
  );
};

export default Http;