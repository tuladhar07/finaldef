import React from "react";
import Imagecarousel from "./ImagePlusTwo";
import "./plustwo.css";

const BuyingPage = () => {
  return (
    <div>
      <div className="cat_main_title">
        <h1 className="cat_title">+2 Books</h1>
      </div>
      <div className="cat_main">
        <div className="cat">
          <p className="para">Categories</p>
          <hr />
          <ul>
            <li>
              <a href="/plustwoo?key=plustwo">+2</a>
            </li>
            <li>
              <a href="/bachelors?key=bachelors">Bachelors</a>
            </li>
            <li>
              <a href="/entrance?key=entrance">Entrance</a>
            </li>
            <li>
              <a href="/school?key=entrance">School Books</a>
            </li>
          </ul>
        </div>
        <div className="booklist_wrapper">
          <Imagecarousel />
        </div>
        <div className="cat_o">
          <p className="para_o">Filters</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BuyingPage;
