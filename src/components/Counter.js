export default function Counter({ counter, limit }) {
  return (
    <div
      className={
        (counter > 0 && 'counter green-border') ||
        (counter < 0 && 'counter red-border') ||
        (counter === 0 && 'counter')
      }
    >
      {counter > 0 && (
        <span className="green-text">{counter < limit ? counter : 'Done'}</span>
      )}
      {counter === 0 && <span className="black">{counter}</span>}
      {counter < 0 && (
        <span className="red-text red-border">
          {counter > -limit ? counter : 'Done'}
        </span>
      )}
    </div>
  );
}
