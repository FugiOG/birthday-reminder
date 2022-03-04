import { useState } from "react";
import './App.css';
import List from './List';
import data from './data';

function App() {
  const [char, setChar] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{char.length} birthdays today</h3>
        <List char={char} />
        <button onClick={() => setChar([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
