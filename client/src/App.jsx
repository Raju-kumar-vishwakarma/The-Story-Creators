import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { MessageCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

import ChatBot from './components/ChatBot';
import OurWork from './pages/OurWork';
import Films from './pages/Films';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';

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
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/our-work' element={<OurWork/>} />
        <Route path='/films' element={<Films/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>

    

      <Footer />
      <Toaster position="bottom-left" richColors />
    </div>
  )
}

export default App;
