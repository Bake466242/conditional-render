import Dummy from './components/dummy.js';
import './App.css';
import Doge from './doge.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Doge name="Scully"/>
       <Dummy />
      </header>
    </div>
  );
}

export default App;
