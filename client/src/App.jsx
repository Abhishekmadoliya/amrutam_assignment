import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";
import Productdetails from "./components/pages/Productdetails";

function App() {
  const [activeTab, setActiveTab] = useState("Shop");

  return (
    <div className="min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<StoreSection />} />
        <Route path="/product/:id" element={<Productdetails />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
