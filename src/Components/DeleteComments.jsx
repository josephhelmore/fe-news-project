
const DeleteComments = ({ loggedInUser, singleArticles, articleComment}) => {
  console.log(articleComment, 'articlecomments');


  
  
  const handleDelete = () => {
    fetch(`https://book-app-kc9i.onrender.com/api/comments/${articleComment.comment_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      console.log("Comment deleted!");
    })
    .catch((err) => {
      console.error("Error deleting comment:", err);
    });
  };


    if (loggedInUser !== articleComment.author) return null; 
    
    return <button onClick={handleDelete}> Delete comment</button>;
};

  


export default DeleteComments;
