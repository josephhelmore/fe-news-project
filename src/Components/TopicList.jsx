import { useEffect, useState } from "react";
import { Link } from "react-router";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://book-app-kc9i.onrender.com/api/topics")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.topics);
        setTopics(data.topics);
      });
  }, []);

  return (
    <div id="topic-list">
      Topic List:
      <ul>
        {topics.map((topic) => (
          <Link to={`/topics/${topic.slug}`}>
            <li key={topic.slug}> {topic.slug}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

//when each topic is clicked, display all the articles where the article.topic = topic

export default TopicList;
