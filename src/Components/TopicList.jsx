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
          <>
            <Link to={"https://book-app-kc9i.onrender.com/api/articles"}>
              <li key={topic.slug}> {topic.slug}</li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
