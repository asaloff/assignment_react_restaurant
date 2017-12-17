import React from 'react';

const Nav = () => {
  return (
    <div className="Nav text-center">
      <ul className="nav nav-pills">
        <li role="presentation"><a href="#menu">Menu</a></li>
        <li role="presentation"><a href="#reservations">Reservations</a></li>
        <li role="presentation"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Nav;
