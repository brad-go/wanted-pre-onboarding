import React, { useState, useEffect } from 'react';
import Logo from './Logo.js';
import Menu from './Menu.js';
import Aside from './Aside.js';
import '../../styles/GlobalNavBar.css';


function GlobalNavBar() {
  const initialState = [
    {
      id: 0,
      href: "/",
      text: "홈",
      update: null
    },
    {
      id: 1,
      href: "/jobsfeed",
      text: "채용",
      update: null
    },
    {
      id: 2,
      href: "/events",
      text: "이벤트",
      update: null
    },
    {
      id: 3,
      href: "/salary",
      text: "직군별 연봉",
      update: null
    },
    {
      id: 4,
      href: "/cv",
      text: "이력서",
      update: null
    },
    {
      id: 5,
      href: "/communnity",
      text: "커뮤니티",
      update: "New"
    },
    {
      id: 6,
      href: "https://wanted.co.kr/gigs/experts",
      text: "프리랜서",
      update: null
    },
    {
      id: 7,
      href: "/aiscore/resume",
      text: "AI 합격예측",
      update: "Beta"
    }
  ];

  const [ categories, setCategories ] = useState(initialState);
  const [ screenSize, setScreenSize ] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

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
  }, [screenSize]);
  

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

// trouble
// 사이즈 조절 시 categories의 상태를 어떻게 변경해야 할지 몰랐었다. 
// 스크린 크기가 변경될 때마다 변경되게 하고 싶었다. 
// if 문을 밖에 쓰니 무한 렌더링이 발생했고, 카테고리의 개수는 줄어들어서
// 원하는 대로 출력되도 원래대로 돌아오지 않았다. 
// useEffect를 사용해서 screenSize를 감시하게 하고 다시 한 번 해봤다. 
// 무한 렌더링은 멈췄지만, 원래 카테고리 개수대로 돌아오지 않았다.
// categories.slice()로 복사해서 해보려고 했지만 이번에는 카테고리가 너무
// 많아지는 현상이 있었다. 
// 갑자기 번뜩 초기값을 설정하면 되지! 라고 떠올랐다. 
// 저 카테고리들을 애초에 useState로 선언했었는데, 초깃값으로 선언해주고
// useState의 초깃값으로 가져왔다. 