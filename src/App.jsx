import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import TopicList from "./Components/TopicList";
import { Route, Routes, Router } from "react-router-dom";
import Articles from "./Components/DisplayedArticles";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/topics/:slug" element={<Articles />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
