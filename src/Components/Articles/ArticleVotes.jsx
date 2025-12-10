const ArticleVotes = ({ singleArticles, hasVoted, handleVote }) => {
  return (
    <>
      <section id="article-votes">
       <strong> Did you like the article? let us know!{" "}</strong>
        <p>This article currently has {singleArticles.votes} votes</p>
      </section>
      <section id="vote-button-section">
        <button
          onClick={() => handleVote(1)}
          disabled={hasVoted}
          className="vote-buttons"
        >
          {" "}
          I liked the article!{" "}
        </button>
        <button
          onClick={() => handleVote(-1)}
          disabled={hasVoted}
          className="vote-buttons"
        >
          {" "}
          Not so much on this one...{" "}
        </button>
      </section>
    </>
  );
};

export default ArticleVotes;
