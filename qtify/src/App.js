import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Card from './Components/CardComponet';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Card/>
    </div>
  );
}
export default App;