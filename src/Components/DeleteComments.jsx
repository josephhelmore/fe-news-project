
const DeleteComments = ({ loggedInUser, singleArticles }) => {
  console.log(loggedInUser, singleArticles, "loggedinuser");


    if (loggedInUser === singleArticles.author)
      return <button> Delete comment</button>;



  
};

export default DeleteComments;
