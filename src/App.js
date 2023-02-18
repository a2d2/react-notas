import logo from "./logo.svg";
import "./App.css";

function App(props) {
  //props que viene de index.js
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.saludo} //props que viene de index.js
        </a>
      </header>
    </div>
  );
}

export default App;
