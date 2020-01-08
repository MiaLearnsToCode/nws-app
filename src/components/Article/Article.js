import React from "react";

const Article = ({ article, category }) => {

  return (
    <div>
      <h2>{article.title}</h2>
      <h3>{article.source.name}</h3>
      <p>{article.description}</p>
      <p>{category}</p>
    </div>
  )
}

export default Article;