import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;