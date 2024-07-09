function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  const getEmoji = () => {
    if (percentage >= 90) return '🥇';
    if (percentage >= 70 && percentage < 90) return '🥈';
    if (percentage >= 50 && percentage < 70) return '🥉';
    if (percentage >= 10 && percentage < 50) return '🙄';
    if (percentage <= 10) return '💩';
  };

  return (
    <>
      <p className='result'>
        {getEmoji()} You scored <strong>{points}</strong> out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p className='highscore'>Best Score: {highscore} Points</p>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'restart' })}>
        Restart The Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
