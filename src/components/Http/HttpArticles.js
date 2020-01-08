import React, { useState, useEffect } from "react";

const HttpArticles = ({ source }) => {

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
        return <h1 key={i}>{article.title}</h1>
        })
      }
      <br></br>
    </div>
  )
}

export default HttpArticles;