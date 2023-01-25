// import React, { useState } from "react";
// import "./AddBook.css";
// import HeaderTwo from "../HeaderTwo";
// import Footer from "../Footer";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddBook() {
//   const [selectedFile, setSelectedFile] = useState();
//   const [image, setImage] = useState("");
//   const [bookname, setBookName] = useState("");
//   const [author, setAuthor] = useState("");
//   const [condition, setCondition] = useState("");
//   const [publicationyr, setPublicationyr] = useState("");
//   const [prices, setPrices] = useState("");
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
//   const addProduct=()=>{
//     console.warn(bookname, author, condition, publicationyr, prices, category);
//     const userId= JSON.parse(localStorage.getItem('user'));
//     console.warn(userId._id);
//   }

//   const handleApi = async (e) => {
//     const formData = new FormData();

//     formData.append("file", selectedFile);
//     formData.append("bookname", bookname);
//     formData.append("author", author);
//     formData.append("condition", condition);
//     formData.append("publicationyr", publicationyr);
//     formData.append("category", category);
//     formData.append("prices", prices);
//     formData.append("location", location);
//     console.log(e.target.files);
//     for (const value of formData.entries()) {
//       console.log(value);
//     }

//     const handleSubmit = async (e) => {
//       e.preventDefault();
       
//       const value = await fetch('http://localhost:5000/add-product', {
//         method: 'POST',
//         body: JSON.stringify(value),
//         headers: {
//           'Content-Type':'application/json',
//             }
//       });
//       console.log(await value.json());};
//     // };}

// export default AddBook;
// import React, { useState } from "react";
// import "./AddBook.css";
// import HeaderTwo from "../HeaderTwo";
// import Footer from "../Footer";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddBook() {
//   const [selectedFile, setSelectedFile] = useState("");
//   const [image, setImage] = useState("");
//   const [bookname, setBookName] = useState("");
//   const [author, setAuthor] = useState("");
//   const [condition, setCondition] = useState("");
//   const [publicationyr, setPublicationyr] = useState("");
//   const [prices, setPrices] = useState("");
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
  
  //const addProduct=()=>{
        //console.warn(bookname, author, condition, publicationyr, prices, category);
        //const userId= JSON.parse(localStorage.getItem('user'))[0]._id;
        //console.log(userId._id);
      //}
  // const handleApi = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   formData.append("file", selectedFile);
  //   formData.append("bookname", bookname);
  //   formData.append("author", author);
  //   formData.append("condition", condition);
  //   formData.append("publicationyr", publicationyr);
  //   formData.append("category", category);
  //   formData.append("prices", prices);
  //   formData.append("location", location);
   // formData.append("userId", userId);

//     
import React, { useState } from "react";
import "./AddBook.css";
import HeaderTwo from "../HeaderTwo";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [bookname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");
  const [publicationyr, setPublicationyr] = useState("");
  const [prices, setPrices] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleApi = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("bookname", bookname);
    formData.append("author", author);
    formData.append("condition", condition);
    formData.append("publicationyr", publicationyr);
    formData.append("category", category);
    formData.append("prices", prices);
    formData.append("location", location);

    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(data);

    await axios
      .post("http://localhost:5000/add-product", data)
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="box">
        <h1 className="add_tit">Add a new book</h1>
        <form className="addbook_f" onSubmit={handleApi}>
          <div className="name">
            <label>Book Name</label>
            <input
              type="text"
              name="bookname"
              value={bookname}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Condition</label>
            <input
              type="text"
              name="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
          <div>
            <label>Publication Year</label>
            <input
              type="tel"
              name="publication"
              value={publicationyr}
              onChange={(e) => setPublicationyr(e.target.value)}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
          </div>
          <div>
            <label>Price(Rs)</label>
            <input
              type="tel"
              name="price"
              value={prices}
              onChange={(e) => setPrices(e.target.value)}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="Category">
            <label>
              Select Category{""}
              {""}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="+2">+2 Books</option>
              <option value="bachelors">Bachelors</option>
              <option value="entrance">Entrance</option>
              <option value="school">School Books</option>
            </select>
          </div>
          <div className="image">
            <input type="file" name="file" onChange={handleImageChange} />

            <button type="submit" className="uploadbtn" onChange={handleApi}>
              Upload!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;