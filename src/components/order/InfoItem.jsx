export default function InfoItem({ name, value, dataTest }) {
  return (
    <div className="flex-col">
      <h1
        data-test={dataTest}
        className="sm:text-base text-lg text-[--maincolor] font-semibold">
        {value}
      </h1>
      <p className="sm:text-sm text-gray-900 font-medium whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}
