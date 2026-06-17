export default function Card({ children, className = "", padding = "p-8" }) {
  return <div className={`card ${padding} ${className}`}>{children}</div>;
}
