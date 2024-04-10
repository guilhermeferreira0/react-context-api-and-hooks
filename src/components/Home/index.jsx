import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';
import { Button } from '../Button';
import { Heading } from '../Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div className="app">
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          set 10
        </Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
          set 100
        </Button>
        <Button
          disabled={state.loading}
          onButtonClick={() => actions.asyncIncrease()}
        >
          Async Increase
        </Button>

        <Button onButtonClick={handleError}>AsyncError</Button>
      </div>
    </div>
  );
};
