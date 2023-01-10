import React from 'react'
import book4 from '../components/book4.jpg';
import './details.css';
import Detailscarousel from './Detailscarousel';
import Detailscarouseltwo from './Detailscarouseltwo';

const Details = () => {
  return (
    <div>
    <div className="selected-book">
     <img className="details_img" src={book4}/> 
      <div className="book_info">
       <div className="book-title">The Invisible Life of Addie Larue </div>
            <p className="author">By Ram Hari Prasad</p>
           
            <div className="deets">
    
            <br/>
            <div className="Condition">Condition : Almost new</div>
            <br/>
            <div className="Year">Publication year : 1995</div>
            <br/>
            <div className="location">Location: Kalimati, Kathmandu</div>
        </div>
        </div>
  
        
     <div className="container"><h1 className='det_pri'>Price: Rs. 900</h1>
     <br/>

          <button  type="button" className="det_btn">Chat now</button>
      <br/>
            <br/>
          <br/>
          <p>Add to wishlist</p>
    </div>
    <div className="uploader">
        <div className="Name">Uploaded By: Koshish Shrestha</div>
        <br/>
        <div className="Number">Contact No. : 9811122233</div>
     </div>
     </div>

     <hr/>

     <div className="line1"></div>
     <br/>
     <div className="Container1"><h2 className="det_pri">Other uploads by Koshish</h2> 
         <br/>
     </div>
     
   
     <Detailscarousel/>
     <hr/>
<br/>
     <div className="Container2"><h2 className="det_pri">Similar Books</h2> 
    <br/>
     <Detailscarouseltwo/>
     <br/>
 </div>
   </div>



   
  

  )
};
export default Details
