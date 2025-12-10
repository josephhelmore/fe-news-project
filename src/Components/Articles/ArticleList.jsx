import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sorting from "../utils/Sorting";
import {
  sortByComments,
  sortByDate,
  sortByVotes,
} from "../utils/HandleSorting";

const Articles = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p id="article-list">Fetching the data... If this is your first time visiting the site, it might take a minute to spin up!  </p>;
  }

  const validArticles = articles.filter((article) => article.topic === slug);

  let sortedArticles = [...validArticles];

  if (sortBy === "comments") {
    sortedArticles = sortByComments(sortedArticles, order);
  } else if (sortBy === "votes") {
    sortedArticles = sortByVotes(sortedArticles, order);
  } else if (sortBy === "date") {
    sortedArticles = sortByDate(sortedArticles, order);
  }

  return (
    <div>
        <Sorting onSortChange={setSortBy} onOrderChange={setOrder} />
      <ul id="article-list">
        {sortedArticles.map((article) => {
          return (
            <button
              onClick={() => navigate(`/articles/${article.article_id}`)}
              className="single-article"
            >
              <p key={article.article_id}>{article.title}</p>
              <p> Author: {article.author}</p>
              <img
                src={article.article_img_url}
                width={100}
                alt="A picture of the article"
              />
              <p> votes: {article.votes}</p>
              <p> comments: {article.comment_count}</p>
              <p>
                Created on: {new Date(article.created_at).toLocaleDateString()}
              </p>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
