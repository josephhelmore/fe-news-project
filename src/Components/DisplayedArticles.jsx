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
              width={100}
              alt="A picture of the article"
            />
            <p> votes: {article.votes}</p>
            <p> comments: {article.comment_count}</p>
            <p>Date: {article.created_at}</p>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
