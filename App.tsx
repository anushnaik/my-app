import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>The Weather App</h2>
          </p>
        <h3>Country</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ><form>
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the Country Name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </a>
      </header>
    </div>
  );
}

export default App;
