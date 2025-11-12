import { useState, useEffect } from "react";

export const useArticleComments = (article_id) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://book-app-kc9i.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.comments, "data on comments");
        setArticleComments(data.comments);
        setIsLoading(false);
      });
  }, [article_id]);

  return { articleComments, isLoading };
};

export default useArticleComments;
