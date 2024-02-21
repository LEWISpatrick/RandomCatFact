import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState('');

  // Function to fetch a new cat fact
  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  };

  // Initial fetch for the cat fact
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className='App'>
      {/* Call `fetchCatFact` when the button is clicked */}
      <button onClick={fetchCatFact}>Generate cat fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
