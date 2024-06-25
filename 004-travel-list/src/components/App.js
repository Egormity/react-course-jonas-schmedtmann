import { useState } from 'react';

import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

export default function App() {
  //--- ADD ITEMS TO THE LIST ---//
  const [items, setItems] = useState([]);
  const handleAddItems = item => setItems(items => [...items, item]);

  //--- DELETE ITEM FROM THE LIST ---//
  const handleDeleteItem = id => setItems(items => items.filter(item => item.id !== id));

  //--- CROSS OUT THE ITEM ---//
  const handleToggleItem = id =>
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );

  //--- CLEAR LIST ---//
  const handleClearlist = () =>
    window.confirm('You sure you wanna delete all the items?') ? setItems([]) : null;

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}
