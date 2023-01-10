import React from 'react'
import Mycard from '../cards/Mycard.js'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import './Imagecarousel.css'
import book1 from '../components/book1.jpg';
import book2 from '../components/book2.jpg';
import book3 from '../components/book3.jpg';
import book4 from '../components/book4.jpg';
import book5 from '../components/book5.jpg';

import './Imagecarousel.css'
const Imagecarousel = () => {

    return (
        

        
            <div className="product-container">
           
            
            
                <Mycard  name="MCQS Solution" img={book4}  seller="Ram" price="Rs. 550" s="Uploaded By : Koshish Shrestha"  />
                <Mycard  name="Engineering Entrance Guide" img={book3} seller="Nhujaw" price="Rs. 600" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Past Questions Collection" img={book1} seller="Koshish" price="Rs. 300" s="Uploaded By : Koshish Shrestha" />
                <Mycard  name="Mathmatics Challenger" img={book5} seller="Kabita" price="Rs.1000" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Business Past Questions" img={book2} seller="Krishna" price="Rs.2000" s="Uploaded By : Koshish Shrestha"/>
                <Mycard  name="Account OLD is GOLD" img={entrance} seller="Mbappe" price="Rs. 150" s="Uploaded By : Koshish Shrestha"/>
    
        
        </div>
    )
}

export default Imagecarousel