import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

import ChatBot from './components/ChatBot';
import OurWork from './pages/OurWork';
import Films from './pages/Films';
import AboutUs from './pages/AboutUs';
import Weeding from './pages/Wedding';
import PreWedding from './pages/PreWedding';
import Engagement from './pages/Engagement';
import Haldi from './pages/Haldi';
import SocialButtons from './components/SocialButtons';
import Birthday from './pages/Birthday';
import Maternity from './pages/Maternity';
import Wedding from './pages/Wedding';

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      {loading && <div className="page-loader" />}
      <Navbar />
      <SocialButtons />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/our-work' element={<OurWork/>} />
        <Route path='/films' element={<Films/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/wedding' element={<Wedding/>} />
        <Route path='/pre-wedding' element={<PreWedding/>} />
        <Route path='/pre-wedding' element={<PreWedding/>} />
        <Route path='/engagement' element={<Engagement/>} />
        <Route path='/haldi' element={<Haldi/>} />
        <Route path='/birthday' element={<Birthday/>} />
        <Route path='/maternity' element={<Maternity/>} />


      </Routes>

    

      <Footer />
      <Toaster position="bottom-left" richColors />
    </div>
  )
}

export default App;
