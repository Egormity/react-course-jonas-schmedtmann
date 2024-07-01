import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick, btnClass }) {
  return (
    <button className={`button ${btnClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => setShowAddFriend(!showAddFriend);
  const handleAddFriend = friend => {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  };
  const handleSelection = friend => {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    // setShowAddFriend(false);
  };
  const handleSplitBill = value => {
    console.log(value);

    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        {/* FRIENDS LIST */}
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {/* ADD FRIEND FORM */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/* BUTTON */}
        <Button onClick={() => handleShowAddFriend()}>
          {!showAddFriend ? 'Add new friend' : 'close'}
        </Button>
      </div>

      {/* SPLIT THE BILL FORM */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map(f => (
        <Friend f={f} onSelection={onSelection} selectedFriend={selectedFriend} key={f.id} />
      ))}
    </ul>
  );
}

function Friend({ f, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === f.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={f.image} alt={f.name} />
      <h3>{f.name}</h3>

      {f.balance < 0 && (
        <p className='red'>
          You owe {f.name} {Math.abs(f.balance)}$
        </p>
      )}

      {f.balance > 0 && (
        <p className='green'>
          {f.name} owe you {f.balance}$
        </p>
      )}

      {f.balance === 0 && <p>You and {f.name} are even</p>}

      <Button
        btnClass={`btn-select ${isSelected ? 'btn-select-active' : ''}`}
        onClick={() => onSelection(f)}>
        {!isSelected ? 'Select' : 'Close'}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label> 😎Friend name:</label>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />

      <label> 🙃Image URL:</label>
      <input type='text' value={image} onChange={e => setImage(e.target.value)} />

      <Button>Add friend</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = e => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>🤑 Bill value:</label>
      <input type='number' value={bill} onChange={e => setBill(+e.target.value)} />

      <label>😕 Your Expense:</label>
      <input
        type='number'
        value={paidByUser}
        onChange={e => setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)}
      />

      <label>😬 {selectedFriend.name}'s expense:</label>
      <input type='number' disabled value={paidByFriend} />

      <label>😏Who is paying the bill:</label>
      <select value={whoIsPaying} onChange={() => setWhoIsPaying()}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
