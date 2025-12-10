import DeleteComments from "./DeleteComments";
import { useState } from "react";

const CommentList = ({
  singleArticles,
  articleComments,
  loggedInUser,
  setComments,
}) => {
  const [deleteMessage, setDeleteMessage] = useState("");

  return (
    <>
      <p>{singleArticles.comment_count} Comments</p>
      <ul id="comment-list">
        {articleComments.map((comment) => (
          <section className="comment" key={comment.comment_id}>
            <strong>{comment.author}</strong>: {comment.body}
            <p className="comment-buttons">Votes: {comment.votes}</p>
            <DeleteComments
              loggedInUser={loggedInUser}
              setComments={setComments}
              articleComment={comment}
              setDeleteMessage={setDeleteMessage}
            />
          </section>
        ))}
      </ul>
      {deleteMessage && <p style={{ color: "green" }}>{deleteMessage}</p>}
    </>
  );
};

export default CommentList;
