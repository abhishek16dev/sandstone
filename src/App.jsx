
import React from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import Sem from "./pages/sem/Sem" ;
import Smm from './pages/smm/smm';
import SEo from "./pages/seo/Seo";

const App = () => {
  return (
    <>

 

 <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/search-engine-marketing" element={<Sem />} />
                <Route path="/search-engine-optimization" element={<SEo />} />
           <Route path="/social-media-marketing" element={<Smm />} />
      

            <Route path="*" element={<Navigate to="/" replace />} />
      
      </Routes>
       <Footer />

    </Router>

      
    </>
  )
}

export default App
