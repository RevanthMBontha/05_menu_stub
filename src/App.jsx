import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

const url =
  'https://api-for-basic-projects.netlify.app/menu-project/menu_data.json';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedButtonID, setSelectedButtonID] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState(new Set());

  const filterItems = (category, id) => {
    if (category === 'all') {
      setMenuItems(items);
      setSelectedButtonID(id);
      console.log('This is output');
      return;
    }
    setSelectedButtonID(id);
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const createCategorySet = () => {
    const allCategories = [
      'all',
      ...new Set(items.map((item) => item.category)),
    ];

    return allCategories;
  };

  const fetchMenu = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMenuItems(data);
    const allCategories = createCategorySet();
    setCategories(allCategories);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (isLoading) {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
          </div>
          <h2 className="title">...is Loading</h2>
        </section>
      </main>
      //
    );
  } else {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
          </div>
          <Categories
            categories={categories}
            filterItems={filterItems}
            selectedBtnID={selectedButtonID}
          />
          <Menu items={menuItems} />
        </section>
      </main>
    );
  }
}

export default App;
