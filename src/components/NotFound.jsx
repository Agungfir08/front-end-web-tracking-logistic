import NotFoundImg from '../assets/not_found.svg';

export default function NotFound() {
  return (
    <div
      data-test="notFound-comp"
      className="mt-4 xl:w-[1237px] h-[528px] max-w-7xl w-[439px] sm:w-[358px] mx-auto flex flex-col bg-gray-100 justify-center items-center gap-8 py-16 rounded-2xl px-8 sm:px-6">
      <img src={NotFoundImg} className=" w-[275px] xl:w-[375px]" />
      <h1 className=" font-bold xl:text-5xl text-4xl text-[--maincolor]">
        Not Found
      </h1>
    </div>
  );
}
