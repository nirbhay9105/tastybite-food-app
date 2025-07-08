import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header';
import FoodList from './components/FoodList';
import Cart from './components/cart';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
 <div className="min-h-screen bg-gradient-to-tr from-amber-100 to-pink-90 text-gray-800">
   
      <Header />
       <Hero/>
      <FoodList />
      <Cart />
      <Footer/>
      </div>
    </>
  );
}

export default App;
