import { useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
import "./App.css";

import Header from "./Components/header";
import TopicList from "./Components/TopicList";
import Articles from "./Components/DisplayedArticles";
import SingleArticle from "./Components/SingleArticle";
import ArticleComments from "./Components/ArticleComments";

function App() {
return (
    <>
      <header>
        <Header />
      </header>
      <div id="main-body">
        <section id="topic-card">
          <TopicList />
        </section>
        <section >
          <Routes>
            <Route path="/" element={<p>Select a topic to view articles.</p>} />
            <Route path="/topics/:slug" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/articles/:article_id/comments" element={<ArticleComments/>} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
