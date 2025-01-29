import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onDarkModeClick={onDarkModeClick} />
  );
}

export default App;
