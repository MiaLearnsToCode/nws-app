import React, { useState } from "react";

const Article = ({ article, handleClick }) => {

  const [show, toggleShow] = useState(false);

  return (
    <div className="article" data-testid='articleContainer'>
      <h2><a href={article.url} rel="noopener noreferrer" target="_blank">{article.title}</a></h2>
      <h3>{article.source.name}</h3>
      <button className="toggle-button" data-testid='toggleButton' onClick={() => toggleShow(!show)}>
        +
      </button>
      {
        show && 
        <div data-testid='toggleDescription'>
          <p>{article.description}</p>
          <button className="category-button" onClick={() => handleClick(article.category)}>{article.category}</button>
        </div>
      }
    </div>
  )
}

export default Article;