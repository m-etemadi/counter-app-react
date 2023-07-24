export default function Setting({ step, limit, handleChange, children }) {
  return (
    <div>
      <label>{children}</label>
      <input
        value={step ? step : limit}
        step={step}
        limit={limit}
        onChange={e => handleChange(+e.target.value)}
        type="text"
      />
    </div>
  );
}
