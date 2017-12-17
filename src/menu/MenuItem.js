import React from 'react';

const MenuItem = ({item}) => {
  const { name, price } = item;

  return (
    <div className="MenuItem">
      <p className="clearfix">
        <span className="pull-left">{name}</span>
        <span className="pull-right">{price}</span>
      </p>
    </div>
  );
};

export default MenuItem;
