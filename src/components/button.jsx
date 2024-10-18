export default function Button({ onClick }) {
  return (
    <>
      <button
        className="border py-2 px-4 rounded hover:bg-slate-200 active:bg-slate-100"
        onClick={onClick}
      >
        New quote
      </button>
    </>
  );
}
