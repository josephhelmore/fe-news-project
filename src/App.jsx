import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import TopicList from "./Components/TopicList";
import { Route, Routes, Router } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<TopicList />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
