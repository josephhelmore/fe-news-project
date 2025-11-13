
const VoteHandler = (article_id, vote) => {
    console.log(article_id, vote)


  return fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes: vote }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Cannot update votes");
      return res.json();
    })
    .then((data)=>{return data})
}





export default VoteHandler