import React, { useEffect, useState, useRef } from 'react';
import { BICHEVRON } from './Icon';

export default function Dropdown({
    title,
    data,
    displayItem,
    selectItem,
    onChange,
}) {
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const handleClick = (item) => {
        const newValue = selectItem(item);
        if (newValue.toLowerCase() !== selected.toLowerCase()) {
            setSelected(newValue);
            onChange(item);
            setOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const truncateString = (str, num) => {
        if (str?.length <= num) {
            return str;
        }
        return str?.slice(0, num) + '...';
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[200px] text-sm h-[40px] relative" ref={ref}>
            <p className="mb-1 font-medium text-black text-sm font-poppins">
                {title}
            </p>
            <div
                onClick={() => setOpen(!open)}
                className={` text-black bg-white w-full p-2 flex items-center justify-between rounded-md border border-black hover:bg-black/5 hover:cursor-pointer }`}>
                {selected ? truncateString(selected, 20) : 'Select'}
                <span className={`${!open && ' rotate-180'}`}>
                    <BICHEVRON />
                </span>
            </div>
            <ul
                className={` absolute z-10 w-full bg-white mt-2 overflow-y-auto scrollbar-hide ${
                    open
                        ? 'max-h-[200px] border border-black rounded-md'
                        : 'max-h-0'
                } `}>
                {data?.map((item) => (
                    <li
                        key={item?.id}
                        className=" !z-50 p-1.5 text-sm hover:bg-black/10 hover:cursor-pointer text-black"
                        onClick={() => handleClick(item)}>
                        {displayItem(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
