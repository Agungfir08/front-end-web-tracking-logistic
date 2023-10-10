import React, { useEffect, useState } from "react";

export default function Notification({ type, message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div
          className={`fixed top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white border border-black w-80 sm:w-60 py-2 rounded-full flex justify-center gap-2 items-center animate-notifAnimation`}>
          {type === "success" ? (
            <svg
              className="w-7 h-7 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48">
              <mask id="ipSCheckOne0">
                <g fill="none" stroke-linejoin="round" stroke-width="4">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    d="m16 24l6 6l12-12"
                  />
                </g>
              </mask>
              <path
                fill="#01803d"
                d="M0 0h48v48H0z"
                mask="url(#ipSCheckOne0)"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="none">
              <path
                d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1227 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C49.993 18.3717 47.3568 12.017 42.6699 7.33006C37.983 2.64317 31.6283 0.00699956 25 0ZM34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6164 32.6923 34.6164C32.4396 34.6164 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6164 17.3077 34.6164C17.055 34.6164 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683L27.7188 25L34.0529 31.3317Z"
                fill="#F00303"
              />
            </svg>
          )}
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
