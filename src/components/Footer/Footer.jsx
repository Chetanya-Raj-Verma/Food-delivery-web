/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <><section className="bg-dark">
       <div className=" footer container " id="footer">
      <div className="footer-content d-flex row">
        <div className="footer-content-left col-md-4  col-sm-12">
          <img src={assets.logo} alt="" />
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center  col-md-4  col-sm-12">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-center col-md-4 col-sm-12">
          <h2>GET IN TOUCH </h2>
          <ul>
            <li>+1 212 234 2300</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">  copyright ©  Tomato.com-All Right Reserved.</p>
    </div>
    </section>
   </>
  );
};

export default Footer;
