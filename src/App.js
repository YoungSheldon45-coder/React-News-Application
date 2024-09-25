import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

function App() {
  const [category, setcategory] = useState('business')
  const [country, setCountry] = useState('us')
  const [loading, setLoading] = useState(false)

  const setUpCountry = (countryCode) => {
    setCountry(countryCode)
    setcategory('');
  }
  return (
    <div className='outer-div'>
      <Navbar setcategory={setcategory} setUpCountry={setUpCountry} category={category} country={country}/>
      <NewsBoard category={category} country={country} setLoading={setLoading} loading={loading}/>
    </div>
  );
}

export default App;
