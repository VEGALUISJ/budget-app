import React from "react";

const Footer = ({ classForResponsive }) => {
  return (
    <footer className={classForResponsive}>
      <h2>
        Coded with
        <img
          src="https://img.icons8.com/cotton/64/000000/like--v1.png"
          alt="Heart"
        />
        Using React. Jose Vega © 2021
      </h2>
    </footer>
  );
};

export default Footer;
