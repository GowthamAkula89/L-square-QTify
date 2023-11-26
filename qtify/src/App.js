import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Albums from './Components/Albums';
import FilterSection from './Components/FilterSection'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Albums/>
      <FilterSection/>
    </div>
  );
}
export default App;