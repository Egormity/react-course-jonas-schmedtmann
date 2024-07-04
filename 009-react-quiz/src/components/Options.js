function Options({ question, dispatch, answer, isAnAnswer }) {
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            !isAnAnswer ? '' : index === question.correctOption ? 'correct' : 'wrong'
          }`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={isAnAnswer}
          key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
