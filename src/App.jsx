
import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './components/scrollup';

import About from './pages/aboutus/AboutUS';
import Conatct from './pages/contactUS/contactuspage';
import Project from './pages/projects/Project';
const App = () => {


  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
       

       

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Conatct />} />
          <Route path="/project" element={<Project />} />

          <Route path="*" element={<Navigate to="/" replace />} />


        </Routes>
        <Footer />

      </Router>


    </>
  )
}

export default App
