import React from "react";
import './App.css';
import MenuLeft from './components/menu/MenuLeft';
import Contents from './components/contents/Contents';
import '@progress/kendo-theme-bootstrap/dist/all.css';

function App() {
  return (
    <div className="App">
      <MenuLeft />
      <Contents />
    </div>
  );
}

export default App;
