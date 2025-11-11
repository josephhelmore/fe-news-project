import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const  useArticleComments = (article_id) => {
  const { article_id } = useParams();
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data on comments");
        setArticleComments(data);
        setIsLoading(false);
      });
  }, [article_id]);
  
return {articleComments, isLoading}

}

export default useArticleComments