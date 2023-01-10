import React from 'react'
import Profilecard from './Profilecard.js'

import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'

import book1 from '../components/book1.jpg';
import book2 from '../components/book2.jpg';
import book3 from '../components/book3.jpg';
import book4 from '../components/book4.jpg';
import book5 from '../components/book5.jpg';


const ProfilePagecarousel = () => {

    return (
        

        <> 
            <div className="product-container-prof">
           
            
            
                <Profilecard  name="Complete Guide on Biology" img={book1}  seller="Ram" price="Rs. 550"  />
                <Profilecard  name="Chemistry Refresher" img={book2} seller="Nhujaw" price="Rs. 600"/>
                <Profilecard  name="Basic Electronics Engineering" img={book3} seller="Kabita" price="Rs. 800"/>
               
    
        
        </div> </>
    )
}

export default ProfilePagecarousel