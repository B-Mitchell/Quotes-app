import React from "react";
import Quote from "./components/quote.jsx";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { QuoteContextProvider } from "./blog-context/context"
import Featured from "./components/pages/BlogPages/Featured";
import Liked from "./components/pages/BlogPages/Liked";
import Footer from "./components/pages/Footer";
import Create from "./components/pages/Create";

function App() {

  return (
    <div className="App">
    <QuoteContextProvider >
    <Router>
      <Navbar />
      <Quote/>
      <Footer />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Featured />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      
    </Router>
    
    </QuoteContextProvider>
    </div>
  );
}

export default App