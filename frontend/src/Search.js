import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ImageBachelors from "./cards/ImageBachelors";
import "./cards/plustwo.css";

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
      {searchResults.map((searchResults, index) => (
        <>
          <p>{searchResults.bookname}</p>
          <p>{searchResults.author}</p>
        </>
      ))}
    </div>
    //     <div>
    //       {searchResults.map((searchResult,index) => (
    //         <>
    //           // <div className="cat_main_title">
    //           //   <h1 className="cat_title">
    //               Search Results for:{searchResult.name}
    //           //   </h1>
    //           // </div>
    //           // <div className="cat_main">
    //           //   <div className="cat">
    //           //     <p className="para">Categories</p>
    //           //     <hr />
    //           //     <ul>
    //           //       <li>
    //           //         <a href="/plustwoo">+2</a>
    //           //       </li>
    //           //       <li>
    //           //         <a href="/bachelors">Bachelors</a>
    //           //       </li>
    //           //       <li>
    //           //         <a href="/entrance">Entrance</a>
    //           //       </li>
    //           //       <li>
    //           //         <a href="/school">School Books</a>
    //           //       </li>
    //           //     </ul>
    //           //   </div>
    //       //       <div className="booklist_wrapper">
    //       //         key={searchResult.id}
    //       //         <p>{searchResult.name}</p>
    //       //       </div>
    //       //     </div>
    //       //   </>
    //       // ))

    //       // <div className="cat_o">
    //       //   <p className="para_o">Filters</p>
    //       //   <hr />
    //       // </div>
    //       </>
    //       ))}
    //       </div>
    //   );
    // };
  );
};
export default SearchResult;
