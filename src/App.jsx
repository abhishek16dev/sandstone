
import React from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sem from "./pages/sem/Sem" ;

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
           <Route path="/digital-marketing/sem" element={<Sem />} />
      
      </Routes>
       <Footer />

    </Router>

      
    </>
  )
}

export default App
