import React, { useState, useEffect } from 'react';
import Logo from './Logo.js';
import Menu from './Menu.js';
import Aside from './Aside.js';
import dataCategories from './dataCategories.js';
import '../../styles/GlobalNavBar.css';


function GlobalNavBar() {
  const initialState = dataCategories;

  const [ categories, setCategories ] = useState(initialState);
  const [ screenSize, setScreenSize ] = useState(window.innerWidth);

  // 화면 사이즈가 바뀌면 screenSize 업데이트
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // 화면 사이즈를 관찰
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // 화면 사이즈에 따라 보여줄 nav 카테고리를 설정
  useEffect(() => {
    if (screenSize <= 767) {
      setCategories(
        categories.filter((category) => {
          return category.id < 3;
        })
      )
    } else {
      setCategories(initialState);
    }
  }, [screenSize, categories, initialState]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <nav className="nav">
          <Logo />
          <Menu categories={categories} />
          <Aside />
        </nav>
      </div>
    </header>
  )
}

export default GlobalNavBar;