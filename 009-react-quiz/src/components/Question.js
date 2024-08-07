import { useQuiz } from '../QuizProvider';
import Options from './Options';

function Question() {
  const { dispatch, answer, isAnAnswer, questions, index } = useQuiz();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} isAnAnswer={isAnAnswer} />
    </div>
  );
}

export default Question;
