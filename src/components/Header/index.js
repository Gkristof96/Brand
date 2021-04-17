import React, { useState } from "react";
import Navbar from "../Navbar";
import Topbar from "../Topbar";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((isMenuOpen) => !isMenuOpen);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Topbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
