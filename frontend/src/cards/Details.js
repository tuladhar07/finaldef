import book4 from "../components/book4.jpg";
import "./details.css";
import Detailscard from "./Detailscard";
import "./Detailscarousel.css";
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

  // const placestolatong = () => {
  //   //map integration
  //   let geocoder = new google.maps.Geocoder();
  //   let address = "new york";

  //   geocoder.geocode({ 'address': address }, function (results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       console.log("results value here:");
  //       console.log(results);
  //       const latitude = results[0].geometry.location.lat();
  //       const longitude = results[0].geometry.location.lng();
  //       console.log(latitude, longitude);
  //     }
  //   });
  // };
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
                <div className="Condition">
                  Condition: {bookdetails.condition}
                </div>
                <br />
                <div className="Year">Year: {bookdetails.publicationyr}</div>
                <br />
                <div className="location">Location: Kalimati, Kathmandu</div>
              </div>
              <h1 className="det_pri">Price: Rs. 900</h1>
            </>
          ))}
        </div>

        <div className="container">
          <h2>Reviews:</h2>
          <ul>
            <p>DAMI DAMI DAMI</p>
          </ul>
          <hr />
          <input
            id="review"
            type="review"
            placeholder="Add your review"
          ></input>
          <button type="button" className="det_btn">
            Add Review
          </button>
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
        <div className="details-product-container details_card_cat">
          {searchSimilarBooks.map((similardetails, index) => (
            <>
              <p>
                {" "}
                <div className="">
                  <Detailscard
                    userId={similardetails.userId}
                    id={similardetails._id}
                    name={similardetails.bookname}
                    img={similardetails.image}
                    seller={similardetails.author}
                    price={similardetails.price}
                    s={similardetails.author}
                  />{" "}
                </div>
              </p>
            </>
          ))}
          <br />
        </div>
      </div>

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
