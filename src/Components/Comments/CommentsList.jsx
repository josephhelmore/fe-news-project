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
      <p id="comment-count-header">{singleArticles.comment_count} Comments</p>
      <section id="comment-list">
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
      </section>
      {deleteMessage && <p style={{ color: "green" }}>{deleteMessage}</p>}
    </>
  );
};

export default CommentList;
