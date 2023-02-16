import React from 'react';
import Button from './Button';

const Categories = ({ categories, filterItems, selectedBtnID }) => {
  const testArray = (caties) => {
    let content = [];
    for (let i = 0; i < caties.length; i++) {
      if (i === selectedBtnID) {
        content.push(
          <Button
            key={i}
            id={i}
            filterItems={filterItems}
            category={caties[i]}
            setClasses="filter-btn filter-btn-selected"
          />
        );
      } else {
        content.push(
          <Button
            key={i}
            id={i}
            filterItems={filterItems}
            category={caties[i]}
            setClasses="filter-btn"
          />
        );
      }
    }
    return content;
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        if (index === selectedBtnID) {
          return (
            <Button
              key={index}
              id={index}
              filterItems={filterItems}
              category={category}
              setClasses="filter-btn filter-btn-selected"
            />
          );
        } else {
          return (
            <Button
              key={index}
              id={index}
              filterItems={filterItems}
              category={category}
              setClasses="filter-btn"
            />
          );
        }
      })}
    </div>
  );
};

export default Categories;

// {
//   testArray(categories);
// }
