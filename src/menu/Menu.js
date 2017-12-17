import React from 'react';
import menuItems from './menu_items';
import MenuSection from './MenuSection';

const Menu = () => {
  const menuSections = menuItems.map(category => {
    let sectionName = Object.keys(category)[0];
    return <MenuSection items={category[sectionName]} sectionName={sectionName} key={sectionName} />;
  });

  return (
    <div className="Menu" id="menu">
      <h2 className="text-center">Menu</h2>
      {menuSections}
    </div>
  );
};

export default Menu;
