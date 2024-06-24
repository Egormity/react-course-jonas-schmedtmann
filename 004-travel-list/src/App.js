const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = function () {
  return <h1>🌴 Far Away 🎒</h1>;
};

const Form = function () {
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (cur, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
};

const Item = function ({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

const PackingList = function () {
  return (
    <div className="list">
      {/* prettier-ignore */}
      <ul style={{ overflow: 'hidden' }}>
        {initialItems.map(i => (<Item item={i} key={i.id}/>))}
      </ul>
    </div>
  );
};

const Stats = function () {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed Y%</em>
    </footer>
  );
};
