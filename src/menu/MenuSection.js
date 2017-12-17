import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({items, sectionName}) => {
  const sectionItems = items.map(item => {
    return <MenuItem item={item} key={item.name} />;
  });

  return (
    <div className="MenuSection col-md-6">
      <div className="col-md-12 well">
        <h4 className="text-center">{sectionName}</h4>
        {sectionItems}
      </div>
    </div>
  );
};

export default MenuSection;
