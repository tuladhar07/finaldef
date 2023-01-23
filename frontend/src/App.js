import "./App.css";

import Header from "./Header";
import HomePage from "./HomePage";
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
import HeaderTwoPage from "./HeaderTwoPage";
import PrivateComponent from "./privatecomponent";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";



function App() {
  return (
      <div className="App">
      <Header/>
  <Routes>
      <Route path="/" element={<HomePage />}></Route>
    
  
      <Route path="/plustwoo" element={<PlusTwo />}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/addbook" element={<AddBook/>}></Route>
      <Route path="/details" element={<Details/>}></Route>
      <Route path="/bachelors" element={<Bachelors/>}></Route>
      <Route path="/entrance" element={<Entrance/>}></Route>
      <Route path="/school" element={<School/>}></Route>
      <Route path="/categories" element={<Category/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profilepage/>}></Route>
      
      </Routes>
        
      
<Footer/>
      </div>
  );
}

export default App;
