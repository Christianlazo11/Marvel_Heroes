import React from "react";
import SearchBox from "./SearchBox";

const NavBar = ({ HandleSearch }) => {
  return (
    <nav className="navbar navbar-light bg-dark navbar-expand-lg p-3 fixed-top col-12">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="text-white">Wiki</span>
          <span className="text-danger">Hero</span>
        </a>
        <SearchBox HandleSearch={HandleSearch} />
      </div>
    </nav>
  );
};

export default NavBar;
