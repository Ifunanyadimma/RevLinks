
import {} from 'react';
import {  Routes, Route, } from 'react-router-dom';
import Snacks from './components/snacks';
import Landing from './components/Landing';
import './App.css';
// import Inventory from './pages/Inventory';

function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Snacks />} />
        <Route path="/order" element={<Landing />} />
        
        {/* <Route path="/inventory" element={<Inventory />} /> */}
  
    </Routes>

  );
}

export default App;
