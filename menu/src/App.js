import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);

    setMenuItems(newItem);
  };
  return (
    <main>
      <div className="menu section">
        <div className="title">
          <h2>Menu section</h2>
          <div className="underline"></div>
        </div>
      </div>
      <Categories categories={categories} filterItem={filterItem} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
