import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import TopicList from "./Components/TopicList";
import Articles from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import ArticleComments from "./Components/ArticleComments";
import LoginButtons from "./Components/LoginButtons";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogIn = (user) => {
    setLoggedInUser(user);
  };

  return (
    <>
      <header id="header">
        <Header />
        <LoginButtons loggedInUser={loggedInUser} handleLogIn={handleLogIn} />
      </header>
      <div id="main-body">
        <section id="topic-card">
          <TopicList />
        </section>
        <section>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics/:slug" element={<Articles />} />
            <Route
              path="/articles/:article_id"
              element={<SingleArticle loggedInUser={loggedInUser} />}
            />
            <Route
              path="/articles/:article_id/comments"
              element={<ArticleComments />}
            />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
