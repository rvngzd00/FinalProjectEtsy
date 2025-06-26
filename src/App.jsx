import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/style/App.css';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Footer from "./components/Footer"




export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/listing/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} /> */}

          {/* Category Routes */}
          {/* <Route path="/category/:category" element={<CategoryPage />} /> */}

          {/* User Routes */}
          {/* <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} /> */}

          {/* Other Pages */}
          {/* <Route path="/sell" element={<SellPage />} />
          <Route path="/sell/*" element={<SellPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/help/*" element={<HelpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/*" element={<AboutPage />} /> */}

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
       </main> 
      <Footer />
    </div>
  );
}
