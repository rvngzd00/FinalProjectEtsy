import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/style/App.css';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Footer from "./components/Footer"
import Product from './pages/Product';
import Category from './pages/Category';
import Cart from './pages/Cart.jsx';
import Favorites from './pages/Favorites.jsx';



export default function App() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[window.location.pathname]);
  return (
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />

            <Route path="/c" element={<Category />} />
            <Route path="/c/:category" element={<Category />} />

            <Route path="/product/:id" element={<Product />} />

            {/* <Route path="/search" element={<Search />} /> */}
            <Route path="/cart" element={<Cart />} />

            <Route path="/favorites" element={<Favorites />} />

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
