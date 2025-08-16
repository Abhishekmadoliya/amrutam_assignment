import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StoreSection from './components/StoreSection';

function App() {
  const [activeTab, setActiveTab] = useState('Shop');

  return (






    <div className="min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <StoreSection/>
    </div>
  );
}

export default App;