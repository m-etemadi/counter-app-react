import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Button from './components/Button';
import Setting from './components/Setting';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [limit, setLimit] = useState(10);

  function handleIncrease() {
    counter < limit && setCounter(s => s + step);
  }

  function handleReset() {
    setCounter(0);
    setStep(1);
  }

  function handleDecrease() {
    counter > -limit && setCounter(s => s - step);
  }

  return (
    <Container>
      <Header />
      <Counter counter={counter} limit={limit} />
      <Buttons>
        <Button className="btn btn-red" onClick={handleDecrease}>
          - Subtract
        </Button>
        <Button className="btn" onClick={handleReset}>
          Reset
        </Button>
        <Button className="btn btn-green" onClick={handleIncrease}>
          + Add
        </Button>
      </Buttons>
      <Settings>
        <Setting step={step} handleChange={setStep}>
          Step
        </Setting>
        <Setting limit={limit} handleChange={setLimit}>
          Limit
        </Setting>
      </Settings>
    </Container>
  );
}

function Container({ children }) {
  return <div className="container">{children}</div>;
}

function Buttons({ children }) {
  return <div className="btn-holder">{children}</div>;
}

function Settings({ children }) {
  return <div className="settings">{children}</div>;
}
