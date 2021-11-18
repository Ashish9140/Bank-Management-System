import React from "react";
import { Link } from "react-router-dom";
/* IMAGES */
import bank from "assets/Home Page/Section 2/Group 3594.svg";
import img1 from "assets/Home Page/Section 2/Img_1 1.svg";
import img2 from "assets/Home Page/Section 2/Img_2 1.svg";
import img3 from "assets/Home Page/Section 2/Img_3 1.svg";
import img4 from "assets/Home Page/Section 2/Img_4 1.svg";

export const MidSection = () => {
  return (
    <>
      <section id="section__two">
        <div className="item">
          <div className="image one">
            <img src={img1} alt="" />
          </div>
          <div className="section_two__content">
            <div className="sub__heading">Transparent Fees</div>
            <div className="content">
              Make payments with peace of mind without worry of hidden fees.
            </div>
          </div>
        </div>
        <div className="item">
          <div className="section_two__content">
            <div className="sub__heading">Lightening Fast payment</div>
            <div className="content">
              All payments are processed instantly without breaking a sweat.
            </div>
          </div>
          <div className="image two">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="image three">
            <img src={img3} alt="" />
          </div>
          <div className="section_two__content">
            <div className="sub__heading">Easy and simple to use</div>
            <div className="content">
              Easily get full access to your account from managing your personal
              details to making payments.
            </div>
          </div>
        </div>
        <div className="item">
          <div className="section_two__content">
            <div className="sub__heading">Safe and secure</div>
            <div className="content">
              We utilize robust security infrastructure with full data
              encryption and protection against DDOS attacks.
            </div>
          </div>
          <div className="image four">
            <img src={img4} alt="" />
          </div>
        </div>
      </section>
      <section id="section__three">
        <img src={bank} alt="" />
          <Link to="/signin">
            <button>
              <span>Register</span>
            </button>
          </Link>
      </section>
    </>
  );
};
