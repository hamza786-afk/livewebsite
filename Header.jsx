import React from "react";
import logo from './Image/Logo.png';


const Header = () => {
return (
    <>
    <div className="header">
      <img src={logo} alt="logo" width='70' height='50'/>
      <h1>Hello Welcome</h1>
    </div>
     
    </>
  );
};

export default Header;