import React from 'react'
import './profilecard.css'
import {Link} from "react-router-dom";

const Profilecard = (props) => {
    return (
        <div>
       
         
        
                
        <div className="profcard_main">
        
        
        
        
        <div className='profcard_body'>
        <img className="profcard_img" src={props.img}/>
        <div className="profcard_det">
        <h2 className="profcard_name"> {props.name}</h2>
        <p className='profseller_name'>{props.seller}</p>
            <p className="profcard_price">{props.price}</p>
            
            </div>
          <Link to="/details"> <button className="profcard_btn">Edit Details</button> </Link> 
            

        

        
        </div>
        </div>
        
</div>
        
    )
}

export default Profilecard