import React, { useState } from "react";
import logo from "../components/logo.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link as Link1 } from "react-scroll";
import { Link as Link2, useNavigate } from "react-router-dom";

function HeaderTwo() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    navigate(`/search?key=${search}`);
    window.location.reload(true);
  };

  return (
    <div className="header">
      <Link2 to="/">
        {" "}
        <img className="header_logo" src={logo}></img>{" "}
      </Link2>

      <div className="header_option">
        <ul>
          <li>
            <Link2 to="/">Home</Link2>
          </li>
          <li>
            <Link2 to="/categories">Categories</Link2>
          </li>
          <li>
            <Link2 to="/about">About</Link2>
          </li>
        </ul>
      </div>
      <div className="header_icons">
        <div className="searchIcon_main">
          <input
            id="search"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="searchText"
            placeholder="    Type to search.."
          ></input>

          <SearchIcon className="header_searchIcon" onClick={handleClick} />
        </div>
        <Link2 to="/login">
          {" "}
          <PersonIcon className="header_personIcon" />{" "}
        </Link2>
      </div>
    </div>
  );
}

export default HeaderTwo;
