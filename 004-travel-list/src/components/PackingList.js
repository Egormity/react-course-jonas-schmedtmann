import { useState } from 'react';
import Item from './Item.js';

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'alphabetic')
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className='list'>
      {/* prettier-ignore */}
      <ul style={{ overflow: 'hidden' }}>
        {sortedItems.map(i => (<Item item={i} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={i.id} />))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='alphabetic'>Sort alphabeticly</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={() => (items.length !== 0 ? onClearList() : null)}>Clear List</button>
      </div>
    </div>
  );
}
