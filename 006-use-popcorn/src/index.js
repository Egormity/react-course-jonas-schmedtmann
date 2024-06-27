import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating maxRating={5} messages={['Terrible', 'bad', 'okay', 'good', 'amazing']} />
    <StarRating
      maxRating={25}
      starSize='24px'
      textSize='50px'
      color='red'
      userClassName='test'
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
