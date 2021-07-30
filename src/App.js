import SearchForm from './components/SearchForm'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <div className="mainContainer">
          <h1>Fantasy Github</h1>
          <p>Build your fantasy Github programming team. Who will be the first team to create the next Google?</p>
            <SearchForm />
 
        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
