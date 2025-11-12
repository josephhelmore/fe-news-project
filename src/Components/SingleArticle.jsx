import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleComments from "./ArticleComments";
import VoteHandler from "./VoteHandler";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { articleComments, isLoading } = useArticleComments(article_id);
  const [singleArticles, setSingleArticles] = useState({});

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.article, "data on article");
        setSingleArticles(data.article);
      });
  }, [article_id]);

  if (isLoading) {
    return <p id="article-list">Fetching the data... </p>;
  }
  const handleVote = (voteChange) => {
    const { article_id } = singleArticles;
    setSingleArticles((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + voteChange,
    }));
    console.log("article_id before VoteHandler:", article_id, singleArticles);
    VoteHandler(article_id, voteChange).then((updatedArticle) => {
      if (updatedArticle) {
        setSingleArticles((currentArticle) => ({
          ...currentArticle,
          votes: updatedArticle.article.votes,
        }));
      }
    });
  };

  return (
    <>
      <section id="single-article-data">
        <h2> {singleArticles.title}</h2>
        <h3>By {singleArticles.author}</h3>
        <img src={singleArticles.article_img_url} alt="Article image" />
        <p>{singleArticles.body}</p>
        <section id="article-votes">
          <p>This article currently has {singleArticles.votes} votes</p> Did you
          like the article? let us know!
          <button onClick={() => handleVote(1)}> I liked the article! </button>
          <button onClick={() => handleVote(-1)}>
            {" "}
            Not so much on this one...{" "}
          </button>
        </section>
        <section id="comments/votes">
          <section id="comments">
            <p>{singleArticles.comment_count} Comments</p>
            <ul id="comment-list">
              {articleComments.map((comment) => (
                <>
                  <li className="comment" key={comment.comment_id}>
                    {comment.author} {" : "}
                    {comment.body}{" "}
                    <p className="comment-buttons">Votes: {comment.votes}</p>
                  </li>
                </>
              ))}
              <p>Add comment</p>
            </ul>
          </section>
        </section>
        created at {singleArticles.created_at}
      </section>
    </>
  );
};

export default SingleArticle;
