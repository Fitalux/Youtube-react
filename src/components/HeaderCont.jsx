import React from "react";
import { Link } from "react-router-dom";
import { PiYoutubeLogoFill } from "react-icons/pi";
import SearchBar from "./SearchBar";

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <PiYoutubeLogoFill className="icon" />
        <Link to="/">API Youtube</Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
