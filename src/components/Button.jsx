export default function Button({
  onClick,
  text,
  type,
  dataTest,
  width,
  rounded,
}) {
  return (
    <button
      data-test={dataTest}
      onClick={onClick}
      type={type}
      className={`bg-[--maincolor] w-[${width}] text-white px-5 py-2 rounded-${rounded} sm:text-sm`}>
      {text}
    </button>
  );
}
