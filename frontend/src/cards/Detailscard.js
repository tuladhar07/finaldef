import React from 'react'
import './detailscard.css';
import Details from './Details';
import {Link} from "react-router-dom";
const Detailscard = (props) => {
    return (

      

        
        <div className="det_main">
        
        <div className='det_body'>
        <img className="det_img" src={props.img}/>
        <div className="det_det">
        <h2 className="det_name"> {props.name}</h2>
        <p className='det_sell'>By {props.seller}</p>
            <p className="det_price">{props.price}</p>
                
         <Link to="/details" >  <button className="det_card_btn">View Details</button> </Link>
            </div>
            
        
           
            </div>
        </div>
        
      
        
    )
};

export default Detailscard