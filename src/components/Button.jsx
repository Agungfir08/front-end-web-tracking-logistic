export default function Button({ onClick, text, type, dataTest, style }) {
    const buttonVariant = {
        buttonLarge: ' w-[150px] rounded-md ',
        buttonSmall: ' w-[80px] rounded-e-md ',
    };
    return (
        <button
            data-test={dataTest}
            onClick={onClick}
            type={type}
            className={`${buttonVariant[style]} bg-[--maincolor] text-white px-5 py-2 sm:text-sm hover:bg-[--secondcolor]`}>
            {text}
        </button>
    );
}
