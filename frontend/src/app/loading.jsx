export default function Loading({ className }) {
  return (
    <div
      className={`fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2 ${className}`}
    >
      <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-accent border-t-transparent"></div>
    </div>
  );
}
