import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import './Navbar.css';
import './Card.css';
import Footer from './Footer';



function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Card/>
      <Footer/>
     
      {/* other components */}
    </div>
  );
}

export default App;