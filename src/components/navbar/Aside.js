import React, { useState } from 'react';
import dataBtns from './btns/dataBtns';
import MobileHamburger from './btns/MobileHamburger.js';

function AsideList (props) {
  const items = props.btn.map((item) => {    
    return (
      <li key={item.id}>
        <item.btn />
        {item.badge === true ? <span className="aside-badge">N</span> : null}
      </li>
    )
  });
  
  return items;
}

export default function Aside() {
  const data = dataBtns;
  const [ btns ] = useState(data);

  return (
    <aside className="aside">
      <ul>
        <AsideList btn={btns} />
        <li className="left-division">
          <a className="dashboard-button" href="/dashboard">기업 서비스</a>
        </li>
        <li className="mobile-menu">
          <MobileHamburger />
        </li>
      </ul>
    </aside>
  )
}