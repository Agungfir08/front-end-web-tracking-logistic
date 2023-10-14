export default function OrderInfoItem({ name, value }) {
  return (
    <div className="flex-col">
      <h1 className="sm:text-base text-lg text-[--maincolor] font-semibold">
        {value}
      </h1>
      <p className="sm:text-sm text-base text-gray-900 font-semibold">{name}</p>
    </div>
  );
}
