import { useState } from "react";
import DeleteComments from "./DeleteComments";

const CommentList = ({ singleArticles, articleComments, loggedInUser }) => {
  const [comments, setComments] = useState(articleComments);
  const [deleteMessage, setDeleteMessage] = useState("");

  return (
    <>
      <p>{singleArticles.comment_count} Comments</p>
      <ul id="comment-list">
        {comments.map((comment) => (
          <>
            <li className="comment" key={comment.comment_id}>
              {comment.author}
              {comment.body}
              <p className="comment-buttons">Votes: {comment.votes}</p>
              <DeleteComments
                loggedInUser={loggedInUser}
                setComments={setComments}
                articleComment={comment}
                setDeleteMessage={setDeleteMessage}
              />
            </li>
          </>
        ))}
      </ul>
      {deleteMessage && <p style={{ color: "green" }}>{deleteMessage}</p>}
    </>
  );
};

export default CommentList;
