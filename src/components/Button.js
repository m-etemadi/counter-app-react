export default function Button({ className, onClick, sign, children }) {
  return (
    <button className={className} onClick={onClick}>
      {sign} {children}
    </button>
  );
}
