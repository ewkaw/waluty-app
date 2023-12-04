import { useState } from 'react';

function App() {
  const plnToEur = 4.37;

  const defaultPln = 3;

  const [pln, setPln] = useState(defaultPln);
  const [eur, setEur] = useState(defaultPln / plnToEur);

  // Musimy zadbac o modyfikacje 2 zmiennych stanowych
  const updateValues = (newPln, newEur) => {
    setPln(newPln);
    setEur(newEur);
  };

  return (
    <div className="App">
        <h1>Waluty app</h1>
        

        <span>1 Euro to w przeliczeniu</span>
        <h3>{plnToEur} Złoty</h3>

        <label htmlFor="pln">PLN</label>
        <input id="pln" type="number"
          // Mozna zdefiniowac domyslna wartosc w ten sposob
          // defaultValue={defaultPln}
          // Po dodaniu robimy controlled input -> wprost mowimy jaka ma miec wartosc
          value={pln}
          onChange={(e) => {
            updateValues(e.target.value, e.target.value / plnToEur);
          }}
           />
        <br />
        {pln}

        <br />

        <label htmlFor="eur">EUR</label>
        <input id="eur" type="number"
           value={eur}
          // Mozna zdefiniowac domyslna wartosc w ten sposob
          //  defaultValue={defaultPln / plnToEur}
           onChange={(e) => {
            updateValues(e.target.value * plnToEur, e.target.value);
          }}
        />
    </div>
  );
}

export default App;
