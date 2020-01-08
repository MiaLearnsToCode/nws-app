import React, { useState, useEffect } from "react";
import HttpArticles from './HttpArticles';

const HttpSources = ({ language, country, category}) => {

  const token = process.env.REACT_APP_NEWS
  const [sources, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/sources?language=${language}&country=${country}&category=${category}&apiKey=${token}`)
        let sources = await res.json()
        if (sources.sources.length) {
          sources = sources.sources.map(source => source.id)
          setData(sources)
        } 
      } catch {
        console.log('error')
      }
    }
    getData()

  }, [category, country, language, token]);

  return (
    <div>
      {
        sources.map(source => {
          return <HttpArticles key={source} source={source}/>
        })
      }
    </div>
  )
}

export default HttpSources;