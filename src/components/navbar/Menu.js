import React, {useState} from 'react';

const List = (props) => {
  const items = props.categories.map((item) => {
    return (
      <li key={item.id} className={item.id === 0 ? "nav-menu__items home-button" : "nav-menu__items"}>
        <a href={item.href} >{item.text}</a>
      </li>
    )
  });
  
  return items;
}

const Menu = (props) => {
  const { categories } = props;

  return (
    <ul className="nav-menu">
      <List categories={categories} />
    </ul>
  );
}

export default Menu;