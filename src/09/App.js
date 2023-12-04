import { useState, useRef, useEffect } from 'react';


function App1() {
  const counter = useRef(0);

  return (
    <div>
      <button onClick={() => {
        counter.current = counter.current + 1;

        alert(counter.current);
      }}>
          Kliknij mnie
      </button>

      <br />

      Counter: {counter.current}
    </div>
  );
}

function App2() {
  const intervalId = useRef(undefined);
  const [now, setNow] = useState(new Date());
  
  // let intervalId;

  console.log('INTERVAL ID (BEFORE useEffect): ', intervalId.current);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setNow(new Date())
    }, 1_000);
    
    console.log('INTERVAL ID (INSIDE OF useEffect): ', intervalId.current);
  }, [])

  console.log('INTERVAL ID (AFTER useEffect): ', intervalId.current);

  return (
    <div>
      <button onClick={() => {
        clearInterval(intervalId.current)
      }}>
          Stop
      </button>
      
      <p>
        {now.toString()}
      </p>
      
    </div>
  );
}

function App3() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
 
  return (
    <div>
     <form> 
        <input ref={inputRef} type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default App3;
