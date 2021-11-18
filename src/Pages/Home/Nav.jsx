import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "assets/Home Page/Header/GraficSpark.png";
// import { About } from "./About";

export const Nav = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [blue, setblue] = useState(false);
  const [isMounted, setMounted] = useState(true);
  useEffect(() => {
    if (isMounted) {
      window.addEventListener("scroll", () => {
        if (window.scrollY < 100 && !blue) {
          return;
        } else if (window.scrollY < 100 && blue) {
          setblue(false);
          return;
        } else if (window.scrollY > 100 && blue) {
          return;
        } else {
          setblue(true);
        }
      });
    } else {
      window.removeEventListener("scroll", () => {
        console.log("")
      })
    }


  }, [blue, isMounted]);

  useEffect(() => {
    return () => {
      setMounted(false);
    }
  }, [])
  return (
    <nav className={blue ? "bg-blue" : ""}>
      <div className="logo">
        <img src={logo} alt="Sumex" />
      </div>
      <div
        className={`hamburger ${navOpen ? "toggle" : ""}`}
        onClick={() => {
          let navState = navOpen ? false : true;
          setnavOpen(navState);
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${navOpen ? "open" : ""}`}>
        <li className={navOpen ? "fade" : ""}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link href="policy">Terms of Services</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <button className="login-button">
            <span>
              <Link to="/signup">Start</Link>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
