import React from 'react'
import Detailscard from './Detailscard'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import book1 from '../components/book1.jpg'
import book5 from '../components/book5.jpg'
import book3 from '../components/book3.jpg'
import book4 from '../components/book4.jpg'

import "./Detailscarousel.css"

const Detailscarousel = () => {

    return (
        

        
            <div className="details-product-container">
     
    
            <div className="details_card_cat">
            <Detailscard  name="Engineering Physics" img={book5}  seller="Ram" price="Rs. 550"  />

            <Detailscard  name="Insights on Accountancy" img={book1} seller="Krishna" price="Rs.2000"/>
            <Detailscard  name="Basic Electronics" img={book3} seller="Mbappe" price="Rs. 150"/>
                </div>
        
        </div>
    )
}

export default Detailscarousel