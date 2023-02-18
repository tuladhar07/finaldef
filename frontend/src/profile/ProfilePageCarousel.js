import React, { useEffect, useState } from "react";
import Profilecard from "./Profilecard.js";
import axios from "axios";

import entrance from "../components/Entrance.jpg";
import school from "../components/School.jpg";

import book1 from "../components/book1.jpg";
import book2 from "../components/book2.jpg";
import book3 from "../components/book3.jpg";
import book4 from "../components/book4.jpg";
import book5 from "../components/book5.jpg";

const ProfilePagecarousel = () => {
  {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const _id = localStorage.getItem("_id");
      const result = await axios.get("http://localhost:5000/products/" + _id);
      console.log(result);
      setApiData(result.data).then((getData) => {
        setApiData(getData.data);
      });
    };

    return (
      <>
        <div className="product-container-prof">
          {apiData.map((profilebook, index) => (
            <Profilecard
            id={profilebook._id}
            img={profilebook.image}
              name={profilebook.bookname}
              price={profilebook.prices}
              author={profilebook.author}
            />
          ))}
        </div>{" "}
      </>
    );
  }
};

export default ProfilePagecarousel;