import { useQuiz } from '../QuizProvider';

function NextButton() {
  const { dispatch, isAnAnswer, isLastQuestion } = useQuiz();

  if (!isAnAnswer) return;

  return !isLastQuestion ? (
    <button className='btn btn-ui' onClick={() => dispatch({ type: 'nextQuestion' })}>
      Next
    </button>
  ) : (
    <button className='btn btn-ui' onClick={() => dispatch({ type: 'finish' })}>
      Finish
    </button>
  );
}

export default NextButton;
