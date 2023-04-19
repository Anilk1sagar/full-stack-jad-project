import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <NavLink to="/">APP</NavLink>
        </div>

        <nav>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/create-post">Create Post</NavLink>
        </nav>
      </header>

      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
