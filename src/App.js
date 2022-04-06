import "./App.css";
import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home/index";
import SearchResults from "./pages/SearchResults/index";
import Detail from "./pages/Detail/index";
function App() {
  return (
    <div className="App-content">
      <Route path="/" component={Home}></Route>
      <Route path="/search/:keyword" component={SearchResults}></Route>
      <Route path="/gif/:id" component={Detail}></Route>
    </div>
  );
}

export default App;
