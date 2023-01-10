import React from 'react'
import Mycard from '../cards/Mycard.js'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import './Imagecarousel.css'
import book4 from '../components/book4.jpg';

import './Imagecarousel.css'
const Imagecarousel = () => {

    return (
        

        
            <div className="product-container">
           
            
            
                <Mycard  name="The Invisible Life of Addie Larue" img={book4} seller="Ram Hari Prasad" price="Rs. 550" s="Uploaded By : Koshish Shrestha" />
                <Mycard  name="Chemistry Booster" img={plustwo} seller="Nhujaw" price="Rs. 600" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Guide on Mathematics" img={entrance} seller="Koshish" price="Rs. 300" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Complete Physics" img={school} seller="Kabita" price="Rs.1000" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Business Mathematics" img={plustwo} seller="Krishna" price="Rs.2000" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Account Book" img={entrance} seller="Mbappe" price="Rs. 150" s="Uploaded By : Koshish Shrestha"/>
    
        
        </div>
    )
}

export default Imagecarousel