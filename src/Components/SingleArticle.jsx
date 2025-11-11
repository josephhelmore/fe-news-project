import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleComments from "./ArticleComments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { articleComments, isLoading } = useArticleComments(article_id);
  const [singleArticles, setSingleArticles] = useState([]);

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.article, "data on article");
        setSingleArticles(data.article);
      });
  }, []);

  if (isLoading) {
    return <p id="article-list">Fetching the data... </p>;
  }

  return (
    <>
      <section id="single-article-data">
        <h2> {singleArticles.title}</h2>
        <h3>By {singleArticles.author}</h3>
        <img src={singleArticles.article_img_url} alt="Article image" />
        <p>{singleArticles.body}</p>
        <section id="comments/votes">
          <p id="votes">
            Did you like this article? Give it a vote! Current votes:{" "}
            {singleArticles.votes}
            <button id="upvote">I liked this article!</button>
            <button id="downvote">Not so much...</button>
          </p>
          <p id="comments">{singleArticles.comment_count} Comments
            <ul>
                {articleComments.map((comment)=>(
                    <p key={c.comment_id}>{c.body}</p>
                ))}
            </ul>
          </p>
        </section>
        created at {singleArticles.created_at}
      </section>
    </>
  );
};

export default SingleArticle;
