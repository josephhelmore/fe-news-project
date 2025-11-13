import VoteHandler from "./VoteHandler";
import { useState } from "react";

const ArticleVotes = ({singleArticles, hasVoted, handleVote}) => {


  return (
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
  );
};

export default ArticleVotes;
