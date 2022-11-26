import React from "react";
import ReactDOM from "react-dom";

// ↓↓↓ 👋 Update this line to change the lesson number ↓↓↓
import Lesson from "./lessons/103/app";

function App() {
  return <Lesson />;
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.unstable_createRoot(rootElement).render(<App />); // Concurrent Mode
