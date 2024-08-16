// Apps.js
import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Blog Title</h1>
      </header>
      <aside>
        <p>Sidebar content</p>
      </aside>
      <main>
        <p>Main content</p>
      </main>
    </div>
  );
}

export default App;
