import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { colors } from 'ui';
// import searchIcon from "img/search-icon.svg";
// import closeIcon from "img/close-icon.svg";
// import categoryNames from "components/categoryNames";

const Wrapper = styled.div`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  overflow-y: scroll;

  /* Desktop Nav */

  .nav-container {
    background: rgba(0, 0, 0, 0.8);
    height: 44px;
    z-index: 300;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .nav-container nav {
    width: 1000px;
    margin: 0 auto;
    padding: 0 8px;
    height: 100%;
  }

  nav .desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  nav .desktop-nav li a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: opacity 400ms;
  }

  nav .desktop-nav li a:hover {
    opacity: 1;
  }

  .link-logo {
    display: block;
    background-position: center;
    height: 44px;
    width: 15px;
    background-repeat: no-repeat;
  }

  .link-search {
    // background: url();
    display: block;
    background-position: center;
    background-size: 18px;
    height: 44px;
    width: 20px;
    background-repeat: no-repeat;
  }

  .link-close {
    // background: url();
    display: block;
    background-position: center;
    background-size: 17px;
    height: 44px;
    width: 20px;
    background-repeat: no-repeat;
  }

  /* Search Container */

  .search-container.hide {
    opacity: 0;
    pointer-events: none;
  }

  .search-container {
    width: 60%;
    margin: 0 auto;
    padding: 0 42px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }

  .search-container .link-search {
    position: absolute;
    left: 12px;
    opacity: 0.5;
  }

  .search-container .link-close {
    position: absolute;
    top: 0;
    right: 12px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 400ms;
  }

  .search-container .link-close:hover {
    opacity: 0.7;
  }

  .search-container form {
    width: 100%;
    margin: 0 auto;
  }

  .search-container form input {
    width: 100%;
    height: 44px;
    border: 0;
    outline: none;
    background: transparent;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 17px;
  }

  /* Overlay */

  .overlay.show {
    position: fixed;
    background: rgba(0, 0, 0, 0.48);
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 100;
  }

  /* Quick Links */

  .search-container .quick-links {
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 16px 8px;
    border-radius: 0 0 16px 16px;
  }

  .search-container .quick-links h2 {
    text-transform: uppercase;
    font-size: 12px;
    color: #6e6e73;
    margin: 0 32px;
    margin-top: 10px;
  }

  .search-container .quick-links ul {
    list-style: none;
    margin-top: 12px;
  }

  .search-container .quick-links ul li a {
    display: inline-block;
    width: 100%;
    padding: 8px 50px;
    font-size: 14px;
    color: #1d1d1f;
    text-decoration: none;
    font-weight: 400;
  }

  .search-container .quick-links ul li a:hover {
    background: #f5f5f5;
    color: #2997ff;
  }

  /* Desktop Nav Animation */

  .desktop-nav li {
    transition: all 400ms ease;
  }

  .desktop-nav.hide li {
    opacity: 0;
    transform: scale(0.8);
    pointer-events: none;
  }

  /* Overlay Animation */

  .overlay {
    transition: all 400ms ease;
  }

  /* Navigation Menu Items Transition Delay */

  .desktop-nav li:nth-of-type(1),
  .desktop-nav.hide li:nth-of-type(7) {
    transition-delay: 0ms;
  }

  .desktop-nav li:nth-of-type(2),
  .desktop-nav.hide li:nth-of-type(6) {
    transition-delay: 30ms;
  }

  .desktop-nav li:nth-of-type(3),
  .desktop-nav.hide li:nth-of-type(5) {
    transition-delay: 60ms;
  }

  .desktop-nav li:nth-of-type(4),
  .desktop-nav.hide li:nth-of-type(4) {
    transition-delay: 90ms;
  }

  .desktop-nav li:nth-of-type(5),
  .desktop-nav.hide li:nth-of-type(3) {
    transition-delay: 120ms;
  }

  .desktop-nav li:nth-of-type(6),
  .desktop-nav.hide li:nth-of-type(2) {
    transition-delay: 150ms;
  }

  .desktop-nav li:nth-of-type(7),
  .desktop-nav.hide li:nth-of-type(1) {
    transition-delay: 180ms;
  }

  /* Search Container Animation */

  .search-container form,
  .search-container .link-search {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
    transition-delay: 300ms;
  }

  .search-container.hide form,
  .search-container.hide .link-search {
    opacity: 0;
    transform: translateX(50px);
  }

  .search-container .link-search {
    opacity: 0.6;
  }

  .search-container.hide .link-close {
    opacity: 0;
  }

  .search-container .link-close {
    opacity: 0.5;
    transition: all 400ms ease;
    transition-delay: 400ms;
  }

  .search-container.hide .quick-links h2 {
    opacity: 0;
    transform: translateX(50px);
  }

  .search-container .quick-links h2 {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
    transition-delay: 100ms;
  }

  .search-container.hide .quick-links ul li {
    transform: translateX(60px);
    opacity: 0;
  }

  .search-container .quick-links ul li {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
  }

  .search-container .quick-links ul li:nth-of-type(1) {
    transition-delay: 120ms;
  }

  .search-container .quick-links ul li:nth-of-type(2) {
    transition-delay: 140ms;
  }

  .search-container .quick-links ul li:nth-of-type(3) {
    transition-delay: 160ms;
  }

  .search-container .quick-links ul li:nth-of-type(4) {
    transition-delay: 180ms;
  }

  .search-container .quick-links ul li:nth-of-type(5) {
    transition-delay: 200ms;
  }

  /* Hidden Items */

  .mobile-nav,
  .mobile-search-container {
    display: none;
  }

  /* Media Queries */

  @media (max-width: 1100px) {
    .nav-container nav {
      width: 100%;
      padding: 0 32px;
    }
  }

  @media (max-width: 768px) {
    .nav-container .desktop-nav {
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 0vh;
      background: #000;
      justify-content: start;
      overflow: hidden;
      z-index: -1;
      transition: all 1000ms ease;
    }

    .nav-container.active .desktop-nav {
      height: 100vh;
    }

    .nav-container .desktop-nav li {
      width: 100%;
      padding: 0 32px;
    }

    .nav-container .desktop-nav li:first-child {
      margin-top: 60px;
    }

    .nav-container .desktop-nav .link-logo,
    .nav-container .desktop-nav .link-search,
    .nav-container .desktop-nav .link-bag {
      display: none;
    }

    .nav-container .desktop-nav li a {
      padding: 16px 0;
      display: inline-block;
      border-bottom: 1px solid #616161;
      width: 100%;
      font-size: 17px;
      transform: translateY(-80px);
      opacity: 0;
      transition: all 700ms ease;
    }

    .nav-container.active .desktop-nav li a {
      transform: translateY(0);
      opacity: 1;
    }

    /* Mobile Nav */

    nav .mobile-nav {
      display: flex;
      width: 100%;
      justify-content: space-between;
      list-style: none;
    }

    nav .menu-icon-container {
      width: 20px;
      height: 44px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    nav .menu-icon {
      position: relative;
      width: 100%;
    }

    nav .menu-icon .line-1,
    nav .menu-icon .line-2 {
      position: absolute;
      height: 1px;
      width: 100%;
      background: #fff;
      transition-property: transform, top;
      transition-delay: 0ms, 160ms;
      transition-duration: 200ms;
    }

    nav .menu-icon .line-1 {
      top: -4px;
    }

    nav .menu-icon .line-2 {
      top: 4px;
    }

    .nav-container.active nav .menu-icon-container .menu-icon .line-1 {
      top: 0;
      transform: rotateZ(45deg);
      transition-property: top, transform;
      transition-delay: 0ms, 160ms;
      transition-duration: 200ms;
    }

    .nav-container.active nav .menu-icon-container .menu-icon .line-2 {
      top: 0;
      transform: rotateZ(-45deg);
      transition-property: top, transform;
      transition-delay: 0ms, 160ms;
      transition-duration: 200ms;
    }

    /* Bag Icon Animation */

    .nav-container.active .mobile-nav .link-bag {
      transform: translateY(8px);
      opacity: 0;
      pointer-events: none;
    }

    .nav-container .mobile-nav .link-bag {
      transition: all 1000ms ease;
    }

    /* Search Box */

    .mobile-search-container input {
      width: 100%;
      padding: 12px 36px;
      font-family: "Inter", sans-serif;
      font-size: 17px;
      background: #1b1b1b;
      border: 0;
      color: #fff;
      border-radius: 8px;
      outline: none;
    }

    .mobile-search-container {
      position: relative;
      padding: 0 16px;
      margin-top: -30px;
      border-bottom: 1px solid #616161;
      display: flex;
      padding-bottom: 16px;
      align-items: center;
      transform: rotateX(90deg);
      opacity: 0;
      transition: all 600ms ease;
    }

    .nav-container.active .mobile-search-container {
      transform: rotateX(0deg);
      margin-top: 10px;
      opacity: 1;
    }

    .mobile-search-container .link-search {
      position: absolute;
      left: 24px;
      opacity: 0.5;
      background-size: 15px;
    }

    /* Nav Move Up */

    .nav-container nav.move-up {
      margin-top: -40px;
    }

    /* Cancel Button */

    .mobile-search-container .cancel-btn {
      color: #2997ff;
      font-size: 17px;
      font-weight: 400;
      cursor: pointer;
      width: 0px;
      overflow: hidden;
      transition: all 400ms ease;
    }

    .mobile-search-container .search-bar.active + .cancel-btn {
      padding: 0 16px;
      width: 74px;
    }

    .mobile-search-container .search-bar {
      flex: 1;
    }

    /* Desktop Nav Move Down */

    nav .desktop-nav.move-down li:first-child {
      margin-top: 150px;
    }

    nav .desktop-nav.move-down li {
      opacity: 0;
      pointer-events: none;
    }

    /* Quick Links */

    .mobile-search-container .search-bar.active ~ .quick-links {
      top: 80px;
      opacity: 1;
      pointer-events: auto;
      transition-delay: 40ms;
    }

    .mobile-search-container .quick-links {
      position: absolute;
      left: 0;
      right: 0;
      padding: 0 32px;
      opacity: 0;
      pointer-events: none;
      top: 10px;
      transition: all 400ms ease;
    }

    .mobile-search-container .quick-links ul {
      list-style: none;
    }

    .mobile-search-container .quick-links h2 {
      color: #86868b;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 400;
    }

    .mobile-search-container .quick-links ul li a {
      padding: 16px 0;
      display: inline-block;
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid #616161;
      width: 100%;
    }

    .mobile-search-container .quick-links ul li a:hover {
      color: #2997ff;
    }

    /* Nav Animation */

    .nav-container nav {
      transition: all 400ms ease;
    }
  }

  input,
  div,
  span,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const searchEnabled = false;

const categories = ["1", "2"];

export default function Nav() {
  const [searchActive, setSearchActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const quickLinks = (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
      </ul>
    </div>
  );
  const mobileNav = (
    <ul className="mobile-nav">
      <li>
        <div
          className="menu-icon-container"
          onClick={() => setNavActive(!navActive)}
        >
          <div className="menu-icon">
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </div>
      </li>
    </ul>
  );
  const desktopNav = (
    <ul
      className={`desktop-nav ${searchActive ? "move-down" : ""} ${
        showOverlay ? "hide" : ""
      }`}
    >
      <li>
        <a className="link-logo"></a>
      </li>
      {/* <li className="logo-item"></li> */}
      {categories.map((category) => (
        <li key={category}>
          <a
            href={`#${category.toLowerCase()}`}
            onClick={() => setNavActive(false)}
          >
            {category}
          </a>
        </li>
      ))}
      <li>
        {searchEnabled ? (
          <a
            href="#"
            className="link-search"
            onClick={() => setShowOverlay(true)}
          ></a>
        ) : null}
      </li>
    </ul>
  );
  const searchBar = (
    <div className={`search-bar ${searchActive ? "active" : ""}`}>
      <form action="">
        <input placeholder="Search" onClick={() => setSearchActive(true)} />
      </form>
    </div>
  );
  return (
    <Wrapper>
      <div className={`nav-container ${navActive ? "active" : ""}`}>
        <nav className={searchActive ? "move-up" : ""}>
          {mobileNav}
          {desktopNav}
        </nav>
        {searchEnabled ? (
          <div className={`search-container ${showOverlay ? "" : "hide"}`}>
            <div className="link-search"></div>
            {searchBar}
            <div
              className="link-close"
              onClick={() => setShowOverlay(false)}
            ></div>
            {quickLinks}
          </div>
        ) : null}
        {searchEnabled ? (
          <div className="mobile-search-container">
            <div className="link-search"></div>
            {searchBar}
            <span className="cancel-btn" onClick={() => setSearchActive(false)}>
              Cancel
            </span>
            {quickLinks}
          </div>
        ) : null}
      </div>
      <div
        className={`overlay ${showOverlay ? "show" : ""}`}
        onClick={() => setShowOverlay(false)}
      ></div>
    </Wrapper>
  );
}