import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Agenda />
      <Blog />
      <Contacto />       
      <Footer />
    </>
  );
}

export default App;
