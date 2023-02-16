import React from 'react';

const Button = ({ category, id, filterItems, setClasses }) => {
  return (
    <button className={setClasses} onClick={() => filterItems(category, id)}>
      {category}
    </button>
  );
};

export default Button;
