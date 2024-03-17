import Menu from './components/Menu/index'
import NewsLetter from './components/NewsLetter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Menu/>
       <NewsLetter/>
      </header>
    </div>
  );
}

export default App;
