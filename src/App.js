import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import ModalSwitch from './components/ModelSwitch';
import Footer from './components/Footer';

//import './App.css';


const App = () => {
  
  useEffect(() => {
    document.title = 'Landkit Clone';
  }, []);


  return (
    <div>
      <Router>
        <Navbar />
        <ModalSwitch />
        <Footer />
      </Router>
   </div>
  );
}

export default App;
