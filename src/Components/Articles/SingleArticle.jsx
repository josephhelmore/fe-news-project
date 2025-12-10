import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleComments from "./ArticleComments";
import VoteHandler from "../utils/VoteHandler";
import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentsList";
import ArticleVotes from "./ArticleVotes";

const SingleArticle = ({ loggedInUser }) => {
  const { article_id } = useParams();
  const { articleComments, isLoading } = useArticleComments(article_id);
  const [singleArticles, setSingleArticles] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleArticles(data.article);
      });
  }, [article_id]);

  useEffect(() => {
    setComments(articleComments);
  }, [articleComments]);

  const handleComment = (newComment) => {
    setComments((current) => [...current, newComment]);
  };

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

  if (isLoading) {
    return <p id="article-list">Fetching the data... </p>;
  }

  return (
    <section id="single-article-data">
      <h2> {singleArticles.title}</h2>
      <h3>By {singleArticles.author}</h3>
      <img src={singleArticles.article_img_url} alt="Article image" />
      <p>{singleArticles.body}</p>
      <ArticleVotes
        singleArticles={singleArticles}
        handleVote={handleVote}
        hasVoted={hasVoted}
      />
      <section id="comments">
        <CommentList
          singleArticles={singleArticles}
          articleComments={comments}
          loggedInUser={loggedInUser}
          setComments={setComments}
        />
      </section>
      <section id="comments-section">
        <CommentForm
          loggedInUser={loggedInUser}
          article_id={article_id}
          onAddingComment={handleComment}
        />
        <p>
        </p>
      </section>
          Created on: {new Date(singleArticles.created_at).toLocaleDateString()}
    </section>
  );
};

export default SingleArticle;
