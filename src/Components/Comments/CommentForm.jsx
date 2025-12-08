import { useState } from "react";
import AddComment from "./AddComment";

const commentForm = ({ article_id, loggedInUser, onAddingComment }) => {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validComment, setValidComment] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!loggedInUser) {
      setError("You must be logged in to post a comment.");
      return;
    }

    setError("");

    setIsLoading(true);


    AddComment(article_id, newComment, loggedInUser).then((createdComment) => {
      if(newComment.length < 1){
        setValidComment(false);
        setError("Comment cannot be empty.");
        return;
      }
      setNewComment("");
      if (createdComment && onAddingComment) {
        onAddingComment(createdComment);
      }
    }).finally(() => {
      setIsLoading(false);
      setHasSubmitted(true);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Write your comment..."
      />
      <button type="submit" > {isLoading ? "Submitting..." : "Submit"}</button>
      {hasSubmitted && !isLoading && validComment && <p> Comment submitted successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default commentForm;
