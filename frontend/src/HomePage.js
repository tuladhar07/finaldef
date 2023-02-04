import React from 'react'
import Home from './Home';
import About from './About';
import Category from './Category';
import HeaderTwo from './headers//HeaderTwo';
import Header from './headers/Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div id="home">
    
      <Home/>
      <Category/>
      <About/>
 
    </div>
  )
}

export default HomePage
