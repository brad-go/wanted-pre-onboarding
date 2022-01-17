import React from 'react';

function Logo() {
  return (
    <div className="nav-top">
      <div className="nav-top__logo">
        <button className="nav-top__hamburger">
          <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hambergur menu"/>
        </button>
        <a className="nav-top__text" href="/">
          <h1 className="nav-top__title">wanted</h1>
        </a>
      </div> 
    </div>
  )
}

export default Logo;