import React from "react";
import Article from "../Article/Article";

const Newsfeed = ({articles, chosenCategory}) => {
  
  const filteredArticles = chosenCategory ? articles.filter(article => article.category === chosenCategory) : articles 
  console.log(filteredArticles)
  return (
    <div data-testid='newsfeedContainer'>
      {
        filteredArticles.map((article, i) => {
          return <Article key={i} article={article} />
        })
      }
    </div>
  );
};

export default Newsfeed;