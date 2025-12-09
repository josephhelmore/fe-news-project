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
      <div className="topic-list">
        <Link to="/"> <p className="topic-button"><strong>HOME</strong></p> </Link>
        {topics.map((topic) => (
          <Link to={`/topics/${topic.slug}`}  key={topic.slug}>
            <p key={topic.slug} className="topic-button"> <strong>{topic.slug}</strong></p> 
          </Link>
        ))}
      </div>
    </div>
  );
};


export default TopicList;
