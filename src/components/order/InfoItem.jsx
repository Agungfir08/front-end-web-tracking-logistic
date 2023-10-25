export default function InfoItem({ name, value }) {
  return (
    <div className="flex-col">
      <h1 className="sm:text-base text-lg text-[--maincolor] font-semibold">
        {value}
      </h1>
      <p className="sm:text-sm text-gray-900 font-medium">{name}</p>
    </div>
  );
}
