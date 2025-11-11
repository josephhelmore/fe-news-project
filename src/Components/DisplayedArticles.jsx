import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Articles = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p id="article-list">Fetching the data... </p>;
  }

  const validArticles = articles.filter((article) => article.topic === slug);
  console.log(validArticles);
  return (
    <div>
      <ul id="article-list">
        {validArticles.map((article) => (
          <button
            onClick={() => navigate(`/articles/${article.article_id}`)}
            className="single-article"
          >
            <p key={article.article_id}>{article.title}</p>
            <img
              src={article.article_img_url}
              width={50}
              alt="A picture of the article"
            />
          </button>
        ))}
      </ul>
    </div>
  );

  //filter through the data.articles array
  //if data.articles[i]=== slug
  //display relevant articles.
  //use params to get access to the slugID
};

export default Articles;
