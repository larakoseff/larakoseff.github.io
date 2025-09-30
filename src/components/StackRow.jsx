
export default function StackRow({ order = 1, children, id }) {
    return (
      <section id={id} className="stack-row" style={{ zIndex: 1000 - order }}>
        {children}
      </section>
    );
  }
  