import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import TopicList from "./Components/utils/TopicList";
import Articles from "./Components/Articles/ArticleList";
import SingleArticle from "./Components/Articles/SingleArticle";
import ArticleComments from "./Components/Articles/ArticleComments";
import LoginButtons from "./Components/utils/LoginButtons";
import LandingPage from "./Components/LandingPage";

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
            <Route path="/" element={<LandingPage />} />
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
