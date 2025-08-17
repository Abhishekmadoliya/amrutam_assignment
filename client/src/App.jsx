import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StoreSection from './components/StoreSection';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Shop');

  return (






    <div className="min-h-screen" >
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <StoreSection/>
      <Footer />
    </div>
  );
}

export default App;