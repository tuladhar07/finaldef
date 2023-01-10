import React from 'react'
import './Mycard.css'
import {Link} from "react-router-dom";
const Mycard = (props) => {
    return (
        <div>
       
            
        
                
        <div className="card_main">
        
        
        
        
        <div className='card_body'>
        <img className="card_img" src={props.img}/>
        <div className="card_det">
        <h2 className="card_name"> {props.name}</h2>
        <p className='seller_name'>{props.seller}</p>
            <p className="card_price">{props.price}</p>
            <p className="s_name">{props.s}</p>
            
            </div>
          <Link to="/details"> <button className="card_btn">View Details</button> </Link> 
            

        

        
        </div>
        </div>
        
</div>
        
    )
}

export default Mycard