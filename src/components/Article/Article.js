import React, { useState } from 'react';
import StyledArticle from '../styled-components/StyledArticle';
import ToggleButton from '../styled-components/styled-buttons/ToggleButton';
import CategoryButton from '../styled-components/styled-buttons/CategoryButton';

const Article = ({ article, handleClick }) => {

  const [show, toggleShow] = useState(false);
  
  return (
    <StyledArticle data-testid='articleContainer'>
      <img src={article.urlToImage} alt={article.title}/>
      <h2><a href={article.url} rel='noopener noreferrer' target='_blank'>{article.title}</a></h2>
      <h3>{article.source.name}</h3>
      <ToggleButton data-testid='toggleButton' onClick={() => toggleShow(!show)}>
        +
      </ToggleButton>
      {
        show && 
        <div data-testid='toggleDescription'>
          <p><strong> {article.country} </strong> {article.description}</p>
          <CategoryButton onClick={() => handleClick(article.category)}>{article.category}</CategoryButton>
        </div>
      }
    </StyledArticle>
  );
};

export default Article;