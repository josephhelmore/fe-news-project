import { useState } from "react";
import AddComment from "./AddComment";

const commentForm = ({ article_id, loggedInUser, onAddingComment }) => {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!loggedInUser) {
      setError("You must be logged in to post a comment.");
      return;
    }

    setError("");

    AddComment(article_id, newComment, loggedInUser).then((createdComment) => {
      setNewComment("");
      if (createdComment && onAddingComment) {
        onAddingComment(createdComment);
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Write your comment..."
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default commentForm;
