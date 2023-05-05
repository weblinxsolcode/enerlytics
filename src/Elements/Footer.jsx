import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiOutlineInstagram,
  AiTwotoneMail,
} from "react-icons/ai";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import Map from "../Components/Map";
const Footer = () => {
  return (
    <>
      <hr className="mt-5" />
      <div className="container">
        <div className="row mx-0 py-4 gap-lg-0 gap-3">
          <div className="col-lg-3">
            <Link to="/" >
              <img src="img/footerlogo.png" alt="" className="img-fluid" />
            </Link>
            <p className="fs-8 text-dark mt-2">
              Lorem Ipsum is simply Dummy Text of the printing and typesetting
              industry.
            </p>
            <Map />
          </div>
          <div className="col-lg-6 ps-lg-5 ">
            <div className="ps-lg-5">
              <p className="fs-6 fw-500 d-flex align-items-center gap-3">
                <span className="border__1"></span> LOREM IPSUM
              </p>
              <p className="fs-7  mb-2">
                Lorem Ipsum is simply Dummy Text of the printing{" "}
              </p>
              <a
                href="tel://+6199942413"
                className="fs-7 text-dark text-decoration-none mb-2"
              >
                Call us : 12367890{" "}
              </a>
              <p className="fs-7  mb-0">Lorem Ipsum </p>
            </div>
            <div className="ps-lg-5 my-3">
              <p className="fs-6 fw-500 d-flex align-items-center gap-3">
                <span className="border__1"></span> GOAL & COMPLIANCE
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis repellat in
                perspiciatis facere repellendus ullam sunt!
              </p>
              <div>
                <img
                  src="img/logo1.png"
                  className="img-fluid me-1"
                  style={{ width: "40px" }}
                  alt="image"
                />
                <img
                  src="img/logo1.png"
                  className="img-fluid m-1"
                  style={{ width: "40px" }}
                  alt="image"
                />
                <img
                  src="img/logo1.png"
                  className="img-fluid m-1"
                  style={{ width: "40px" }}
                  alt="image"
                />
                <img
                  src="img/logo1.png"
                  className="img-fluid m-1"
                  style={{ width: "40px" }}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="fs-6 fw-500 d-flex align-items-center gap-3">
              {" "}
              <span className="border__1"></span> SIGN UP FOR EMAIL UPDATES
            </p>
            <div className="d-flex gap-3" style={{ cursor: "pointer" }}>
              <FaFacebookF className="fs-3" />
              <AiFillLinkedin className="fs-3" />
              <a className="text-dark" href="mailto:someone@yoursite.com">
                <AiTwotoneMail className="fs-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
