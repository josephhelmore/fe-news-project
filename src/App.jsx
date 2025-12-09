import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import TopicList from "./Components/utils/TopicList";
import Articles from "./Components/Articles/ArticleList";
import SingleArticle from "./Components/Articles/SingleArticle";
import LoginButtons from "./Components/utils/LoginButtons";
import LandingPage from "./Components/LandingPage";
import Sorting from "./Components/utils/Sorting";


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
        <section id="topic-card">
          <TopicList />
        </section>
      <div id="main-body">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/topics/:slug" element={<Articles />} />
            <Route
              path="/articles/:article_id"
              element={<SingleArticle loggedInUser={loggedInUser} />}
            />
            <Route path="*" element={<p>404 Not Found</p>}></Route>
          </Routes>
        
      </div>
    </>
  );
}

export default App;
