import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [singleArticles, setSingleArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://book-app-kc9i.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.article, "data on article");
        setSingleArticles(data.article);
        setIsLoading(false);
      });
  }, []);

return  (
<h2> {singleArticles.title}</h2>
)

};



export default SingleArticle;
