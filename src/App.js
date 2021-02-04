import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Dummy from './components/dummy.js';
import User from './components/user'
import './App.css';
import Doge from './doge.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route className=".App-link" path="/todd">
              <User name="Todd" age="45" isLoggedIn={true} />
            </Route>
            <Route className=".App-link" path="/Becca">
              <User name="Becca" age="28" isLoggedIn={true} />
            </Route>
            <Route>
              <Dummy />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
