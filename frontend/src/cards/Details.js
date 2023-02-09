import book4 from "../components/book4.jpg";
import "./details.css";
import Detailscard from "./Detailscard";
import Mycard from "../cards/Mycard.js";
import Detailscarouseltwo from "./Detailscarouseltwo";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Details = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchUsers, setUserResults] = useState([]);
  const [searchSimilarBooks, setSimilarBooks] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const key = new URLSearchParams(location.search).get("key");
  const userId = new URLSearchParams(location.search).get("userId");
  console.log(userId);
  const { slug } = useParams();
  useEffect(() => {
    searchProduct();
    searchUploader();
    SimilarBooks();
  }, []);

  const searchProduct = async () => {
    console.log(key);
    let result = await fetch(`http://localhost:5000/bookdetails/${key}`);
    result = await result.json();
    if (result) {
      setSearchResults(result);
    }
  };
  const searchUploader = async () => {
    console.log(userId);
    let result = await fetch(`http://localhost:5000/userdetails/${userId}`);
    result = await result.json();
    if (result) {
      setUserResults(result);
    }
  };
  const SimilarBooks = async () => {
    console.log(userId);
    let result = await fetch(`http://localhost:5000/products/${userId}`);
    result = await result.json();
    if (result) {
      setSimilarBooks(result);
    }
  };

  return (
    <div>
      <div className="selected-book">
        <img className="details_img" src={book4} />
        <div className="book_info">
          {searchResults.map((bookdetails, index) => (
            <>
              {" "}
              <div className="book-title">{bookdetails.bookname} </div>
              <p className="author">{bookdetails.author}</p>
              <div className="deets">
                <br />
                <div className="Condition">{bookdetails.condition}</div>
                <br />
                <div className="Year">{bookdetails.publicationyr}</div>
                <br />
                <div className="location">Location: Kalimati, Kathmandu</div>
              </div>
            </>
          ))}
        </div>

        <div className="container">
          <h1 className="det_pri">Price: Rs. 900</h1>
          <br />

          <button type="button" className="det_btn">
            Chat now
          </button>
          <br />
          <br />
          <br />
          <p>Add to wishlist</p>
        </div>
        <div className="uploader">
          {searchUsers.map((userdetails, index) => (
            <>
              <div className="Name">{userdetails.username}</div>
              <br />
              <div className="Number">{userdetails.ContactNo}</div>
            </>
          ))}
        </div>
      </div>

      <hr />

      <div className="line1"></div>
      <br />
      <div className="Container2">
      <h2 className="det_pri">Other uploads </h2>
        
        {searchSimilarBooks.map((similardetails, index) => (
          <>
         
          <p> <Detailscard
          userId={similardetails.userId}
            id={similardetails._id}
            name={similardetails.bookname}
            img={similardetails.image}
            seller={similardetails.author}
            price={similardetails.price}
            s={similardetails.author}
          /> </p>
          </>
        ))}
        <br />
      </div>

      {/*<div className="details-product-container">
        <div className="details_card_cat">
          {searchSimilarBooks.map((similardetails, index) => (
            <Detailscard
              name={similardetails.bookname}
              // img={book5}
              seller={similardetails.author}
              price={similardetails.price}
            />
          ))}
        </div>
          </div>*/}
      <hr />
      <br />
      <div className="Container2">
        <h2 className="det_pri">Similar Books</h2>
        <br />
        <Detailscarouseltwo />
        <br />
      </div>
    </div>
  );
};

export default Details;
