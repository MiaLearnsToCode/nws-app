import React from 'react';
import Article from '../Article/Article';

const Newsfeed = ({articles, chosenCategory, handleClick}) => {
  
  const filteredArticles = chosenCategory ? articles.filter(article => article.category === chosenCategory) : articles ;
  return (
    <div data-testid='newsfeedContainer'>

      {
        filteredArticles.map((article, i) => {
          return <Article key={i} article={article} handleClick={handleClick}/>
        })
      }
    </div>
  );
};

export default Newsfeed;