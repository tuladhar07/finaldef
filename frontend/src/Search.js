import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ImageBachelors from "./cards/ImageBachelors";
import "./cards/plustwo.css";
import Mycard from "./cards/Mycard";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const key = new URLSearchParams(location.search).get("key");
  const { slug } = useParams();
  useEffect(() => {
    searchProduct();
  }, []);

  const searchProduct = async () => {
    console.log(key);
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setSearchResults(result);
    }
  };

  return (
    <div>
      <div>
        {searchResults.map((searchResults, index) => (
          <>
            <div className="cat_main_title">
              <h1 className="cat_title">
                Search Results for : {key}{" "}
              </h1>
            </div>
            <div className="cat_main">
              <div className="booklist_wrapper"></div>
              <Mycard
                userId={searchResults.userId}
                name={searchResults.bookname}
                img={searchResults.image}
                seller={searchResults.author}
                price={searchResults.price}
                s={searchResults.author}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default SearchResult;
