import { useEffect, useState } from "react";
import { Link } from "react-router";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/topics")
      .then((response) => response.json())
      .then((data) => {
        setTopics(data.topics);
      });
  }, []);

  return (
    <div className="topic-container">
      <ul className="topic-list">
        <Link to="/" className="topic-card"> <strong>HOME</strong> </Link>
        {topics.map((topic) => (
          <Link to={`/topics/${topic.slug}`}>
            <p key={topic.slug} className="topic-card"> <strong>{topic.slug}</strong></p> 
          </Link>
        ))}
      </ul>
    </div>
  );
};

//when each topic is clicked, display all the articles where the article.topic = topic

export default TopicList;
