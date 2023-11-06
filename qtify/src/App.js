import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SearchBox1 from './Components/SearchBox';
function App() {
  return (
    <div className="App">
      <SearchBox1/>
      <Navbar/>
    </div>
  );
}
export default App;