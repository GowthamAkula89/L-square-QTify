import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Albums from './Components/Albums';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Albums/>
    </div>
  );
}
export default App;