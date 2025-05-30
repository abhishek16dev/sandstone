
import React from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sem from "./pages/sem/Sem" ;
import Smm from './pages/smm/smm';

const App = () => {
  return (
    <>

  {/* <Header />
  <Home />
  <Footer /> */}


 <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/search-engine-marketing" element={<Sem />} />
           <Route path="//social-media-marketing"element={<Smm />} />
      
      </Routes>
       <Footer />

    </Router>

      
    </>
  )
}

export default App
