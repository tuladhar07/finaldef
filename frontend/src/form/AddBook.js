import React, { Component } from "react";
import "./AddBook.css";
import HeaderTwo from "../HeaderTwo";
import Footer from "../Footer";



class AddBook extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      bookname: "",
      author: "",
      condition:"",
      message: '',
      category: "bachelors",
      selectedFile: null,
      
    };
  
  }
  
  handlebooknameChange = (event) => {
    this.setState({
      bookname: event.target.value,
    });
  };
  handleauthorChange = (event) => {
    this.setState({
      author: event.target.value,
    });
  };
  handleconditionChange = (event) => {
    this.setState({
      condition: event.target.value,
    });
  };
  handlelocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };
  updateNumber = (e) => {
    const val=e.target.value;
    if(e.target.validity.valid) this.setState({message:e.target.value});
    else if(val === '' || val==='-') this.setState({message: val});
    
  };
  updateprice = (e) => {
    const val=e.target.value;
    if(e.target.validity.valid) this.setState({price:e.target.value});
    else if(val === '' || val==='-') this.setState({price: val});
    
  };
  handlecategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  // On file select (from the pop up)
  onFileChange = event => {
     
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
   
  };
   
  // On file upload (click the upload button)
  onFileUpload = () => {
   
    // Create an object of formData
    const formData = new FormData();
   
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
   
    // Details of the uploaded file
    console.log(this.state.selectedFile);

  
  }

  render() {
    return (
      <>
      
        <div className="box">
        <h1 className="add_tit">Add a new book</h1>
        <form className="addbook_f">
        
          <div className="name">
            <label>Book Name</label>
            <input
              type="text"
              value={this.state.bookname}
              onChange={this.handlebooknameChange}
            />
            
          </div>
          <div>
            <label>Author</label>
            <input
            type="text"
            value={this.state.author}
            onChange={this.handleauthorChange}
            />
          </div>
          <div>
            <label>Condition</label>
            <input
            type="text"
            value={this.state.condition}
            onChange={this.handleconditionChange}
            />
          </div>
          <div>
            <label>Publication Year</label>
            <input
            type="tel"
            value={this.state.message}
            onChange={this.updateNumber}
            pattern="^-?[0-9]\d*\.?\d*$"
            />
            
          </div>
          <div>
            <label>Price(Rs)</label>
            <input
            type="tel"
            value={this.state.price}
            onChange={this.updateprice}
            pattern="^-?[0-9]\d*\.?\d*$"
            />
            <div>
            <label>Location</label>
            <input
            type="text"
            value={this.state.location}
            onChange={this.handlelocationChange}
            />
          </div>
            
          </div>
          <div className="Category">
            <label>Select Category{''}{''}</label>
            <select value={this.state.category} onChange={this.handlecategoryChange}>
              <option value="+2">+2 Books</option>
              <option value="bachelors">Bachelors</option>
              <option value="entrance">Entrance</option>
              <option value="school">School Books</option>
            </select>
          </div>
          <div className="image">
          
                <input type="file" onChange={this.onFileChange} />
                <button type="submit" className="uploadbtn" onClick={this.onFileUpload}>
                  Upload!
                </button>
            
          </div>
        </form>
        </div>
       
      </>
    );
  }
}

export default AddBook;