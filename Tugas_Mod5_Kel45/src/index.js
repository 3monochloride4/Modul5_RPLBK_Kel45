import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/child/cardlist/cardList";
import HomePage from "./components/parent/homePage"
import Toggle from "./components/theme/toggle"
import { ThemeProvider } from "./components/theme/themeContext"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className = "h-screen bg-white dark:bg-gray-900">
        <Toggle />
        <HomePage />
      </body>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
