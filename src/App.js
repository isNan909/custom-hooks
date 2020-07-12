import React, { useState } from 'react';

function App() {
  const [count, newCount] = useState(0);
  return (
    <div className="App">
      <h2>Counter Click</h2>
      <p>You have clicked {count} times.</p>
      <button onClick={() => newCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
