import React, { useState } from "react";

const Article = ({ article }) => {

  const [show, toggleShow] = useState(false);

  return (
    <div data-testid='articleContainer'>
      <h2>{article.title}</h2>
      <h3>{article.source.name}</h3>
      <div data-testid='toggleButton' onClick={() => toggleShow(!show)}>
        +
      </div>
      {
        show && 
        <div data-testid='toggleDescription'>
          <p>{article.description}</p>
          <p>{article.category}</p>
        </div>
      }
    </div>
  )
}

export default Article;