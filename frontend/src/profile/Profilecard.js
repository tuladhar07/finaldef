import React from "react";
import "./profilecard.css";
import { Link } from "react-router-dom";

const Profilecard = (props) => {
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Book is deleted");
    }
  };
  return (
    <div>
      <div className="profcard_main">
        <div className="profcard_body">
          <img className="profcard_img" src={props.img} />
          <div className="profcard_det">
            <h2 className="profcard_name"> {props.name}</h2>
            <p className="profseller_name">{props.seller}</p>
            <p className="profcard_price">{props.price}</p>
          </div>
          
            {" "}
            <Link to={"/updatebook/" + props.id}> <button className="profcard_btn">Edit Details</button>{" "}</Link>
          
          <button
            className="delete_btn"
            onClick={() => deleteProduct(props.id)}
          >
            Delete post
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
