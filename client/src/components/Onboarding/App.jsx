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
import Weeding from './pages/Weeding';
import PreWedding from './pages/PreWedding';
import Engagement from './pages/Engagement';
import Haldi from './pages/Haldi';

const SocialButtons = () => (
  <div className="fixed right-4 md:right-6 bottom-24 flex flex-col gap-3 z-50">
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Visit Instagram"
      className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    </a>

    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-[#25D366] text-white transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7"
        fill="currentColor"
      >
        <path d="M20.5 3.5A11 11 0 0 0 3.6 16.9L3 21l4.2-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5ZM12 20a9 9 0 0 1-4.6-1.3l-.3-.1-2.5.7.7-2.4-.2-.3A9 9 0 1 1 12 20Zm5.2-6.9c-.3-.2-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.1 8.1 0 0 1-1.5-2c-.2-.4 0-.5.1-.6l.4-.5.2-.3a.6.6 0 0 0 0-.6c0-.1-.6-1.5-.8-2S9.1 6 8.8 6s-.7 0-1 .2-.9.8-.9 2a4.2 4.2 0 0 0 .9 2.4A9.5 9.5 0 0 0 12 14.8a5.1 5.1 0 0 0 2.2.5 2.5 2.5 0 0 0 1.7-.6 2 2 0 0 0 .4-1.2c.1-.2.1-.4-.1-.5Z" />
      </svg>
    </a>
  </div>
);

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
        <Route path='/wedding' element={<Weeding/>} />
        <Route path='/pre-wedding' element={<PreWedding/>} />
        <Route path='/pre-wedding' element={<PreWedding/>} />
        <Route path='/engagement' element={<Engagement/>} />
        <Route path='/haldi' element={<Haldi/>} />

      </Routes>

    

      <Footer />
      <Toaster position="bottom-left" richColors />
    </div>
  )
}

export default App;
