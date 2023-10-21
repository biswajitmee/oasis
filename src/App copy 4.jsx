// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dishes from './Dishes';
import Order from './Order';
import Offer from './Offer';
import Loader from './Loader';
import Header from './Header';
import { LoaderProvider } from './LoaderContext';

const App = () => {
  return (
    <> 
    <Router>
      <LoaderProvider>
        <Loader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/order" element={<Order />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </LoaderProvider>
    </Router>
 </>
    
  );
};

export default App;
