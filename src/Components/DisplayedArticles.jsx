import React, { useState, useEffect } from "react";
import { useParams, useNavigate,  } from "react-router-dom";

const Articles = () => {
  let navigate = useNavigate();
  const { slug } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles, "data.articles");
        setArticles(data.articles);
      });
  }, []);

  const validArticles = articles.filter((article) => article.topic === slug);
  console.log(validArticles);
  return (
    <div id="article-list">
      Articles in topic {`${slug}`}
      <ul>
        {validArticles.map((article) => (
          < React.Fragment key={article.article_id} >
            <li key={article.article_id}>{article.title}</li>
            <img
              src={article.article_img_url}
              width={200}
              alt="A picture of the article"
            />
          </React.Fragment>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );

  //filter through the data.articles array
  //if data.articles[i]=== slug
  //display relevant articles.
  //use params to get access to the slugID
};

export default Articles;
