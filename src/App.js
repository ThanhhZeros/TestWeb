import logo from './logo.svg';
import './App.css';
import MenuLeft from './components/menu/MenuLeft';
import Contents from './components/contents/Contents';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
      <MenuLeft />
      <Contents />
    </div>
  );
}

export default App;
