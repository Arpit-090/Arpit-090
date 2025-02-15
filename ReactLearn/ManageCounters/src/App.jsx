import React, { useState } from 'react';
import './App.css';
import Counter from './Countercomponent';
import { useCounter, CounterContext, CounterProvider } from './Context';

function App() {
  const [counter, setCounter] = useState({});

  const increment = (counterName) => {
    setCounter((prev) => ({ ...prev, [counterName]: (prev[counterName] || 0) + 1 }));
  };

  const decrement = (counterName) => {
    setCounter((prev) => ({ ...prev, [counterName]: (prev[counterName] || 0) - 1 }));
  };

  const reset = (counterName) => {
    setCounter((prev) => ({ ...prev, [counterName]: 0 }));
  };

  return (
    <CounterProvider value={{ counter, increment, decrement, reset }}>
      <div className="App">
        <h1>Manage Counters</h1>
        <Counter counterName="counter1" />
        <Counter counterName="counter2" />
        {/* Add more Counter components as needed */}
      </div>
    </CounterProvider>
  );
}

export default App;