function Progress({ index, numQuestions, points, maxPossiblePoints, isAnAnswer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + +isAnAnswer} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
