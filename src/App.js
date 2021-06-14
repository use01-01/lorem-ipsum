import React, { useState, useEffect } from 'react';
import data from './data';

const App = () => {
  const [input, setInput] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [items, setItems] = useState(data);
  useEffect(() => {
    if (paragraphs < 0) {
      setItems(data.slice(0, 1));
    } else if (paragraphs >= 0) {
      setItems(data.slice(0, paragraphs));
    }
  }, [paragraphs]);
  return (
    <div>
      <h1>tired of boring lorem ipsum</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setParagraphs(input)}>generate</button>
      {items.map((item) => {
        return (
          <div key={item}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
