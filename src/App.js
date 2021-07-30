import SearchForm from './components/SearchForm'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="mainContainer">
          <h1>Fantasy Github</h1>
          <p>Build your fantasy Github programming team. Who will be the first team to create the next Google?</p>
            <SearchForm />
 
        </div>
      </div>
    </Router>
  );
}

export default App;
