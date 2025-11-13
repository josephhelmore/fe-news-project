import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleComments from "./ArticleComments";
import VoteHandler from "./VoteHandler";
import CommentForm from "./CommentForm";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { articleComments, isLoading } = useArticleComments(article_id);
  const [singleArticles, setSingleArticles] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
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

    setHasVoted(true);

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
    <section id="single-article-data">
      <h2> {singleArticles.title}</h2>
      <h3>By {singleArticles.author}</h3>
      <img src={singleArticles.article_img_url} alt="Article image" />
      <p>{singleArticles.body}</p>
      <section id="article-votes">
        <p>This article currently has {singleArticles.votes} votes</p> Did you
        like the article? let us know!
        <button onClick={() => handleVote(1)} disabled={hasVoted}>
          {" "}
          I liked the article!{" "}
        </button>
        <button onClick={() => handleVote(-1)} disabled={hasVoted}>
          {" "}
          Not so much on this one...{" "}
        </button>
      </section>
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
        </ul>
      </section>
<CommentForm article_id={article_id}/>
      created at {singleArticles.created_at}
    </section>
  );
};

export default SingleArticle;
