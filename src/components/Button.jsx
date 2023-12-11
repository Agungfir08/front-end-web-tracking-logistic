export default function Button({ onClick, text, type, dataTest }) {
  return (
    <button
      data-test={dataTest}
      onClick={onClick}
      type={type}
      className="bg-[--maincolor] w-[150px] text-white px-5 py-2 rounded-md sm:text-sm">
      {text}
    </button>
  );
}
