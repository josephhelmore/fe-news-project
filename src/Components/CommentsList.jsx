import DeleteComments from "./DeleteComments";

const CommentList = ({ singleArticles, articleComments }) => {
  return (
    <>
      <p>{singleArticles.comment_count} Comments</p>
      <ul id="comment-list">
        {articleComments.map((comment) => (
          <>
            <li className="comment" key={comment.comment_id}>
              {comment.author} {" : "}
              {comment.body}{" "}
              <p className="comment-buttons">Votes: {comment.votes}</p>
              <DeleteComments />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default CommentList;
