import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Greetings and Salutations! My name is</h5>
        <h1>Troy Delacruz!</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
