import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const plnToEur = 4.37;

  const [pln, setPln] = useState();

  return (
    <div className="App">
        <h1>Waluty app</h1>
        

        <span>1 Euro to w przeliczeniu</span>
        <h3>{plnToEur} Złoty</h3>

        <label htmlFor="pln">PLN</label>
        <input id="pln" type="number" defaultValue="3"
          // Po dodaniu robimy controlled input -> wprost mowimy jaka ma miec wartosc
          value={pln}
          onChange={(e) => setPln(e.target.value)} />
        <br />
        {pln}

        <br />

        <label htmlFor="eur">EUR</label>
        <input id="eur" type="number" value={pln / plnToEur} />
    </div>
  );
}

export default App;
