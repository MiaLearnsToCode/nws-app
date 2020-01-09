import React, { useState } from "react";

const Article = ({ article, category }) => {

  const [show, toggleShow] = useState(false);

  return (
    <div data-testid='articleContainer'>
      {console.log(article)}
      <h2>{article.title}</h2>
      <h3>{article.source.name}</h3>
      <div data-testid='toggleButton' onClick={() => toggleShow(!show)}>
        +
      </div>
      {
        show && 
        <div data-testid='toggleDescription'>
          <p>{article.description}</p>
          <p>{category}</p>
        </div>
      }
        
      
      
    </div>
  )
}

export default Article;