import React from 'react';
import "./profilepage.css";
import photo from "../components/3135823.png"
import ProfilePageCarousel from "./ProfilePageCarousel";
import HeaderTwo from '../HeaderTwo';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Details =(props) =>{
  return(
    <>
    <div className='prof_det'>
    <h3 className='name_profile'>  {props.username}</h3>
   
    <h3 className='no_profile'> {props.number}</h3>
    <h3 className='address_profile'> {props.address}</h3>
    </div>
    </>
  )
}

const Profile =() => {
  return(
    <>
  
    <p className="p_tit">Account Details</p>
    <div className='container_profile'>
    <div className='left_container_profile'> 
      
      
      < Details username={'Koshish Shrestha'} number={9811122233} address={'Kalimati, Kathmandu'}/>
      <button type="submit" className="update_profile">Update Profile</button>

      


    </div>
    <div className='right_container_profile'>
   
    <ProfilePageCarousel/>
    </div>
    <div className='photo_profile'> 
    <img src={photo} alt="profilepic"/>
    
    </div>
    <div className='Uploads_profile'>My Uploads</div>
    <div> <Link to="/addbook"><button type="submit" className="addbook_profile">Add new book</button> </Link></div> 
    </div>
 
 
    </>
  );
}
 
export default Profile;