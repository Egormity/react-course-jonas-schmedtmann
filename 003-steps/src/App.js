import { useState } from 'react';

/* const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

const Steps = function () {
  const btnStyle = { backgroundColor: '#7950f2', color: '#fff' };
  const active = num => (step >= num ? 'active' : '');

  const [step, setStep] = useState(1);
  const prevStep = () => (step > 1 ? setStep(s => s - 1) : '');
  const nextStep = () => (step < messages.length ? setStep(s => s + 1) : '');

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps ">
          <div className="numbers">
            <div className={active(1)}>1</div>
            <div className={active(2)}>2</div>
            <div className={active(3)}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages.at(step - 1)}
          </p>

          <div className="buttons">
            <button style={btnStyle} onClick={prevStep}>
              Previous
            </button>
            <button style={btnStyle} onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; */

//--- CODING CHALLENGE #1 ---//
export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const Counter = function () {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const addOrSub = (func, add, num) =>
    add ? func(what => what + num) : func(what => what - num);

  return (
    <div>
      <button onClick={() => addOrSub(setStep, false, 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => addOrSub(setStep, true, 1)}>+</button>
      <br />

      <button onClick={() => addOrSub(setCount, false, 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => addOrSub(setCount, true, 1)}>+</button>

      <h3>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>Something</span>
      </h3>
    </div>
  );
};
