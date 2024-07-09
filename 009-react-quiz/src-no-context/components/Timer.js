import { useEffect } from 'react';

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeLeft = (minutes + '').padStart(2, 0) + ':' + (seconds + '').padStart(2, 0);

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return <div className='timer'>{timeLeft}</div>;
}

export default Timer;
