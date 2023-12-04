import { useState, memo, useMemo, useCallback } from 'react';

// memo pozwala na "przykeszowanie" komponentu
const Child = memo(
  ({ text, lines, user, onClick }) => {
    console.log('<Child />');

    return (
      <div>
        I am child ( {text} )
        <br />
        Hi, {user.name}
        <br />

        <button onClick={() => onClick('Czesc')}>Click me</button>

        {lines.join(' ')}
      </div>
    )
  }
)

// Symulacja zlozonej operacji
const complexCalculation = () => {
  while (true) {
    if (new Date().getSeconds() > 30) break;
  }
}

function App() {
  const [counter, setCounter] = useState(0);

  const lines = useMemo(
    // Funkcja wyliczajaca wartosc 
    () => ['Pierwsza linia', 'Druga linia', 'Trzecia linia'],
    // Lista zalezonsci ( jak w useEffect )
    []
  );

  // To samo co wyzej, dla obiektu
  const user = useMemo(
    // Funkcja wyliczajaca wartosc 
    () => ({ name: 'Oskar' }),
    // Lista zalezonsci ( jak w useEffect )
    []
  );

  // Wyink zlozonej operacji tez mozna przykeszowac
  // const result = useMemo(() => complexCalculation(), [])

  // Sposob na przykeszowanie funkcji
  const handleChildClick = useCallback(
    // Mozemy zdefiniowac argumenty funkcji przykeszowanej ( zmemoizowanej )
    text => {
      alert('Dziecko klikniete' + text)
    },
    // Zaleznosci tak samo jak w useMemo
    []
  )

  console.log('<App />');

  return (
    <div>
      I am parent

      <button onClick={() => {
        setCounter(prev => prev + 1);
      }}>
        Click counter {counter}
      </button>

      <br />

      <Child
        text="Tekst z rodzica"
        lines={lines}
        user={user}
        onClick={handleChildClick}
      />
    </div>
  );
}

export default App;

// Generalnie stosujemy techniki memoizacji ( memo, useMemo, useCallback ) wtedy kiedy pojawiaj sie problemy z performance.
// Nigdy nie wsadzamy wszystkich komponentow w memo! -> to moze wrecz spowolnic nasza aplikacjem poniewaz react musi sprawdzic czy dany komponent przerenderowac