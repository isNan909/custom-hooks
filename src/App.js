import React, { useState } from 'react';

function App() {
  const useCounter = (birth, die, increament) => {
    const [count, setCount] = useState(birth);

    const handleCount = () => {
      if (count === die) {
        alert('You cant live more than 100 years');
        return setCount(birth);
      }
      return setCount(count + increament);
    };
    return [count, handleCount];
  };

  const [count, handleCount] = useCounter(0, 100, 5);

  return (
    <>
      <div className="App">
        <h2>How many years do you want to live ?</h2>
        <p>I want to live {count} years.</p>
        <br />
        <div>
          <button onClick={handleCount}>Click me</button>
        </div>
      </div>
    </>
  );
}

export default App;
