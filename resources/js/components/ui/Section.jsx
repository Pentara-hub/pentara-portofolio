export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-main">{children}</div>
    </section>
  );
}
