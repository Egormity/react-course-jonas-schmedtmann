import Options from './Options';

function Question({ question, dispatch, answer, isAnAnswer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} isAnAnswer={isAnAnswer} />
    </div>
  );
}

export default Question;
