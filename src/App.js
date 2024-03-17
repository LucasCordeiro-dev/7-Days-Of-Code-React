import Menu from './components/Menu/index'
import NewsLetter from './components/NewsLetter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Menu/>
       <NewsLetter/>
      </header>
    </div>
  );
}

export default App;
