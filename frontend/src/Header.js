import React from 'react'
import logo from './components/logo.png'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 , useNavigate} from 'react-router-dom';


const Header=()=> {
const auth=localStorage.getItem('user');
const navigate=useNavigate();
const logout=()=>{
 localStorage.clear();
 navigate('/signup')
}
   
  return (
    <div className='header'>
    <Link2 to="/">   <img className="header_logo" src={logo}></img> </Link2> 
  
    
    <div className="header_option">
    <ul>
            <li><Link1 to = "home" spy={true} smooth={true} offset={-150} duration={500}>Home</Link1></li>
       <li><Link1 to ="category" spy={true} smooth={true} offset={-100} duration={500}>Categories</Link1></li> 
          <li><Link1  to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link1></li>
        
        </ul>
      </div>
      <div className="header_icons">
      <div className="searchIcon_main">
      <input id="search" type="text" className="searchText" placeholder="    Type to search.."></input>
   
       <SearchIcon className='header_searchIcon' onClick={addSearchData}/>
    
       </div>
 
       <li>{ auth ? <Link2 onClick={logout} to="/login"> Logout </Link2> :
       <Link2 to ="/login"> <PersonIcon className='header_personIcon'/> </Link2>
        }
       
        </li>
      </div>
    </div>
  )

}


export default Header

const addSearchData=()=>
{
    console.log(document.getElementById('search').value);
   

}


