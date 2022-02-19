import React from "react";
import NavBar from "./NavBar";
const Header = ({ HandleSearch }) => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <NavBar HandleSearch={HandleSearch} />
    </div>
  );
};

export default Header;
