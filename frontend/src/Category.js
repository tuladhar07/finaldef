import React from 'react'
import './Category.css';
import { Link } from "react-router-dom";
import plustwo from './cards/PlusTwo';
import books from './components/books.png'
import clipart1 from './components/clipart1.jpg'
import clipart3 from './components/clipart3.jpg'
import clipart4 from './components/clipart4.jpg'
import clipart5 from './components/clipart5.jpg'

const Category = () => {
  return (
    <div id="category">
  
   
    <h1 className="cat_name">Categories</h1>
    <div className="category">
    
   
    
    <div className="cat_one">
    <img className="cat_pic" src={clipart1}/>
    <h1 className='cat_name'>+2 Books</h1>
    <Link to ="/plustwoo"> <button className="button_buyo">Buy Books</button> </Link>
    </div>

    <div className="cat_two">
    <img className="cat_pic" src={clipart5}/>
    <h1 className="cat_name">Bachelors </h1>
    <Link to ="/bachelors"><button className="button_buyo" >Buy Books</button></Link>
    </div>
    <div className="cat_three">
    <img className="cat_pic" src={clipart4}/>
    <h1 className="cat_name">Entrance</h1>
    <Link to ="/entrance"><button className="button_buyo">Buy Books</button></Link>
    </div>
    <div className="cat_four">
    <img className="cat_pic" src={clipart3}/>
    <h1 className='cat_name'>School Books</h1>
    <Link to="/school"><button className="button_buyo">Buy Books</button></Link>
    </div>
    </div>


</div>
    
    
  )
}

export default Category
