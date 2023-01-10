import React from 'react';
import Footer from "./Footer";
import PlusTwo from "./cards/PlusTwo";
import SignUp from "./form/SignUp";
import Login from "./form/login";
import AddBook from "./form/AddBook";
import Details from "./cards/Details";
import Bachelors from "./cards/Bachelors";
import School from "./cards/School";
import Entrance from "./cards/Entrance";
import Category from "./Category";
import About from "./About";
import Profilepage from "./profile/ProfilePage";
import HeaderTwo from './HeaderTwo';
import HomePage from './HomePage';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
  

function HeaderTwoPage() {
  return (
    <div>
    <HeaderTwo/>
    
    <Footer/>
    </div>
    
  )
}

export default HeaderTwoPage
