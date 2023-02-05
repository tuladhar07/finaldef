import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mycard.css";
import { Link } from "react-router-dom";
const Mycard = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card_main">
        <div className="card_body">
          <img className="card_img" src={props.img}></img>
          <div className="card_det">
            <h2 className="card_name"> {props.name}</h2>
            <p className="seller_name">{props.seller}</p>
            <p className="card_price">{props.price}</p>
            <p className="s_name">{props.s}</p>
          </div>{" "}
          <button
            className="card_btn"
            onClick={() =>
              navigate(`/details?key=${props.id}&userId=${props.userId}`)
            }
          >
            View Details
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mycard;
