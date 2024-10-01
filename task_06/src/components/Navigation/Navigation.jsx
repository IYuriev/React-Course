import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

export default function Navigation() {
  const menu = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/countries`,
      title: `Countries`,
    },
  ];

  const getClass = (value) => {
    const classes = [`menu__item`];
    if (value.isActive) classes.push(`menu__item--active`);
    return classes.join(` `);
  };

  return (
    <nav>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className={getClass}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
