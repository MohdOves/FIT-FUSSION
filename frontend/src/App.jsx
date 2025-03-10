import React from 'react'
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';

import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Galler from "./pages/Galler";
import Membership from './pages/Membership';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <WorkoutSessions/>
            <Gallery/>
          
            <Contact/>
            <BMICalculator/>
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Galler />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
