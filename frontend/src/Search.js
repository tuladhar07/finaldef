import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ImageBachelors from './cards/ImageBachelors';
import "./cards/plustwo.css";

const SearchResult = () => {



    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const { slug } = useParams();
    useEffect(() => {
      const searchProduct = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5000/products?q=${query}`); setSearchResults(data.products);
          } catch (error) {
           setError(error.response?.data?.message);
           }
          };
           searchProduct();
         }, []);






  return (
    <div>
   {searchResults.map((searchResult) => (
    <>
    <div className='cat_main_title'>
    <h1 className='cat_title'>Search Results for:{searchResult.name}</h1>
    </div>
    <div className="cat_main">
    <div className="cat">
        
    <p className="para">Categories</p>
    <hr/>
    <ul>
    <li><a href="/plustwoo">+2</a></li>
    <li><a href="/bachelors">Bachelors</a></li>
    <li><a href="/entrance">Entrance</a></li>
    <li><a href="/school">School Books</a></li>
    
    </ul>
    </div> 
    <div className="booklist_wrapper">
    
   key={searchResult.id}
   <p>{searchResult.name}</p>
    
   </div>
    </div>
    </>
   ))}

    <div className="cat_o">
        

    <p className="para_o">Filters</p>
    <hr/>
    </div> 
   

    </div>
  )
}

export default SearchResult
