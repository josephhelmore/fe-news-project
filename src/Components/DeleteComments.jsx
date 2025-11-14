import { useState } from "react";

const DeleteComments = ({
  loggedInUser,
  setComments,
  articleComment,
  setDeleteMessage,
}) => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    fetch(
      `https://book-app-kc9i.onrender.com/api/comments/${articleComment.comment_id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        setComments((currComments) =>
          currComments.filter((c) => c.comment_id !== articleComment.comment_id)
        );

        setDeleteMessage("Comment deleted!");
        setTimeout(() => setDeleteMessage(""), 2000);
      })

      .catch((err) => {
        console.error("Error deleting comment:", err);
      });
  };

  const commentAuthor = articleComment.author || articleComment.username;

  if (loggedInUser !== commentAuthor) return null;

  return (
    <>
      <button onClick={handleDelete}>Delete comment</button>
      {deleted && (
        <p style={{ marginLeft: "8px", color: "green" }}>Comment deleted</p>
      )}
    </>
  );
};

export default DeleteComments;
