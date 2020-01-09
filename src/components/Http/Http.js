import React, { useState, useEffect } from "react";
import Article from './../Article/Article'

const Http = ({ language, country, category }) => {

  const token = process.env.REACT_APP_NEWS
  const [articles, setData] = useState([]);

  useEffect(() => {
    const getArticlesData = async (source) => {   
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source.id}&apiKey=${token}`)
        let articles = await res.json()
        setData(articles.articles)
      } catch(error) {
        console.log(error)
      }
    }

    const getSourcesData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/sources?language=${language}&country=${country}&category=${category}&apiKey=${token}`)
        let sources = await res.json()
        if (sources.sources.length) sources.sources.map(getArticlesData)
      } catch (error) {
        console.log(error)
      }
    }

    getSourcesData()

  }, [category, country, language, token]);

  return (
    <div>
      {
        articles.map((article, i) => {
          return <Article key={i} category={category} country={country} article={article} />
        })
      }
    </div>
  )
}

export default Http;