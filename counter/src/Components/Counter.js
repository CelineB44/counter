import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span> </span>
      <input 
      type="number"
      onChange={(event) => {
        let valueNumber = parseInt (event.target.value);
        setCount (valueNumber);
      }} />
      <p>Le compteur est à :{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
