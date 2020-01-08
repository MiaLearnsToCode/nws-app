import React, { useState, useEffect } from "react";
import Article from './../Article/Article'

const HttpArticles = ({ source, category }) => {

  const token = process.env.REACT_APP_NEWS
  const [articles, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${token}`)
        let articles = await res.json()
        setData(articles.articles)
      } catch {
        console.log('error')
      }
    }
    getData()

  }, [source, token]);

  return (
    <div>
      <br></br>
      {console.log(articles)}
      {
        articles.map((article, i) => {
        return <Article key={i} category={category} article={article}/>
        })
      }
      <br></br>
    </div>
  )
}

export default HttpArticles;