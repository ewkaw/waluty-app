import { useState } from 'react';

function App() {
  const plnToEur = 4.37;

  const defaultPln = 3;

  /**
   * Jedna struktura danych
   {
     pln: 3,
     eur: 0.12
   }
   */
  // const [pln, setPln] = useState(defaultPln);
  // const [eur, setEur] = useState(defaultPln / plnToEur);
  const [currencyValues, setCurrencyValues] = useState({
    pln: defaultPln,
    eur: defaultPln / plnToEur,
    // Dodatkowe pole
    // usd: 123,
   })

  // Musimy zadbac o modyfikacje 2 zmiennych stanowych
  const updateValues = (newPln, newEur) => {
    // Tak nie zadziala
    // currencyValues.eur = 10;

    // Przyklad nadpisania tylko pol pln i eur, a pozostawienie reszty pol tak jak byly
    // setCurrencyValues(prev => ({
    //     ...prev,
    //     pln: newPln,
    //     eur: newEur
    //   })
    // );
    
    // setCurrencyValues({
    //   pln: newPln,
    //   eur: newEur
    // });
  };

  return (
    <div className="App">
        <h1>Waluty app</h1>
        USD: {currencyValues.usd}
        <br />

        <span>1 Euro to w przeliczeniu</span>
        <h3>{plnToEur} Złoty</h3>

        <label htmlFor="pln">PLN</label>
        <input id="pln" type="number"
          // Mozna zdefiniowac domyslna wartosc w ten sposob
          // defaultValue={defaultPln}
          // Po dodaniu robimy controlled input -> wprost mowimy jaka ma miec wartosc
          value={currencyValues.pln}
          onChange={(e) => {
            updateValues(e.target.value, e.target.value / plnToEur);
          }}
           />
        <br />
        {currencyValues.pln}

        <br />

        <label htmlFor="eur">EUR</label>
        <input id="eur" type="number"
           value={currencyValues.eur}
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
