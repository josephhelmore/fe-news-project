const AddComment = (article_id, newComment, loggedInUser) => {
  return fetch(
    `https://book-app-kc9i.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: loggedInUser, body: newComment }),
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data.comments;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export default AddComment;
