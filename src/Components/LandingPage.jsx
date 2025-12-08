import Sorting from "./utils/Sorting";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sortByComments, sortByDate, sortByVotes } from "./utils/HandleSorting";

const LandingPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      }),
      [];
  });

  if (isLoading) {
    return <p id="article-list">Fetching the data... </p>;
  }

  let sortedArticles = [...articles];

  if (sortBy === "comments") {
    sortedArticles = sortByComments(sortedArticles, order);
  } else if (sortBy === "votes") {
    sortedArticles = sortByVotes(sortedArticles, order);
  } else if (sortBy === "date") {
    sortedArticles = sortByDate(sortedArticles, order);
  }

  return (
    <>
      <div>
        <Sorting onSortChange={setSortBy} onOrderChange={setOrder} />
        <section id="article-list">
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
                <p>Topic: {article.topic}</p>
                <p> Votes: {article.votes}</p>
                <p> Comments: {article.comment_count}</p>
                <p>
                  {" "}
                  Created on:{" "}
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
              </button>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default LandingPage;
