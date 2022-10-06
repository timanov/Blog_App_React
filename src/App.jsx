import React from "react";
import { Route } from "react-router-dom";
import './App.css'
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Route path="/" components={Home}/>
      <Route path="/blog/:id" components={Blog}/>
    </div>
  )
}

export default App;