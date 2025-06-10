
import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sem from "./pages/sem/Sem";
import Smm from './pages/smm/smm';
import SEo from "./pages/seo/Seo";
import Web from './pages/web3/web';
import ScrollToTop from './components/scrollup';
import Privacy from './components/privacy';

// import "./index.css";
import ContentMarketing from './pages/contentMarketing/cm';
import Affilatemarketing from './pages/affilateMarketing/Affilatemarketing';
import Brandmarketing from './pages/brandMarketing/brandmarketing';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Lead from './pages/leadGeneartion/lead';
import Orm from './pages/Orm/Orm';
import DigitalTranformationservice from './pages/Digitalservice/DigitalTranformationservice';

const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-engine-marketing" element={<Sem />} />
          <Route path="/search-engine-optimization" element={<SEo />} />
          <Route path="/social-media-marketing" element={<Smm />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/affiliate-marketing" element={<Affilatemarketing />} />
          <Route path="/brand-strategy" element={<Brandmarketing />} />
          <Route path="/lead-generation" element={<Lead />} />
          <Route path="/online-reputation-managment" element={<Orm />} />
           <Route path="/digital-transformation" element={<DigitalTranformationservice />} />

          <Route path="*" element={<Navigate to="/" replace />} />


        </Routes>
        <Footer />

      </Router>


    </>
  )
}

export default App
