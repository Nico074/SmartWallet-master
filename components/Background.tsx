export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg/space.jpg')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(52,116,216,0.18)_0%,rgba(9,16,36,0)_42%),linear-gradient(180deg,rgba(4,9,23,0.22)_0%,rgba(4,9,22,0.34)_100%)]" />
    </div>
  );
}
