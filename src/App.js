import "./App.css";
import Block from "./components/Block.js";
import Grid from "./components/Grid.js";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>Use your skills to fill the grid with blocks, using code!</p>
        <ul>
          <li>Young professionals: however you like</li>
          <li>Medior+: delay between the displaying of the blocks</li>
          <li>Bonus points: randomize! (e.g., the blocks order or colors)</li>
        </ul>
        <Grid>
          <Block />
        </Grid>
        <p>
          <em>
            Note: there is no actual grid, those are just css background lines.
          </em>
        </p>
      </main>
    </div>
  );
}

export default App;
