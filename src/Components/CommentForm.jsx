import { useState } from "react";
import AddComment from "./AddComment";

const commentForm = ({ article_id }) => {
  const [newComment, setNewComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    AddComment(article_id, newComment).then(() => setNewComment(""));
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );

};

export default commentForm