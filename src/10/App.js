import { useState, memo } from 'react';

// memo pozwala na "przykeszowanie" komponentu
const Child = memo(
  ({ text, lines }) => {
    console.log('<Child />');

    return (
      <div>
        I am child ( {text} )
        <br />

        {lines.join(' ')}
      </div>
    )
  },
  // Mozliwosc sprawdzenia, czy poprzednie propsy sa rowne nowym. Jesli tak, to nie przerenderowujemy komponentu
  (prevProps, nextProps) => {
    for (let i = 0; i < nextProps.lines.length; i++) {
      if (nextProps[i] !== prevProps[i]) return false;
    }

    return true;
   }
)

function App() {
  const [counter, setCounter] = useState(0);

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
        // Kiedy uzalezniam propa od stanu, to memo nie "przykeszuje" komponentu, bo sa inne propsy
        // text={`Tekst z rodzica ${counter}`}
        // text="Tekst z rodzica"
        lines={['Pierwsza linia', 'Druga linia', 'Trzecia linia']}
      />
    </div>
  );
}

export default App;
