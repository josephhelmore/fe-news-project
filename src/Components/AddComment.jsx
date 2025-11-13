



const AddComment = (article_id, newComment) => {
  console.log(article_id, newComment, "article id");
  return fetch(
    `https://book-app-kc9i.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "weegembump", body: newComment }),
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export default AddComment;
