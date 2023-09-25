import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";

function Tracking() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className=" font-semibold">Tracking results</h1>
      <div className="bg-white rounded-lg px-8 py-6 flex flex-col w-[320px] h-[440px] md:w-[400px] md:h-[500px] justify-between">
        <div className="mt-6">
          <Stepper
            activeStep={0}
            lineClassName="bg-gray-500 h-2"
            activeLineClassName="bg-[--maincolor]">
            <Step
              className=" w-14 h-14 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
              activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
              completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-8 h-8 sm:w-6 sm:h-6"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4h3a2 2 0 0 1 2 2v1m-5 13h3a2 2 0 0 0 2-2v-1M4.425 19.428l6 1.8A2 2 0 0 0 13 19.312V4.688a2 2 0 0 0-2.575-1.916l-6 1.8A2 2 0 0 0 3 6.488v11.024a2 2 0 0 0 1.425 1.916zM9.001 12H9m12 0h-5m0 0l2-2m-2 2l2 2"
                />
              </svg>
              <div className="absolute -bottom-[2.3rem] w-max text-center text-base font-medium sm:text-sm">
                <h6>Entry</h6>
              </div>
            </Step>
            <Step
              className=" w-14 h-14 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
              activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
              completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-6 sm:h-6"
                viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z"
                />
              </svg>
              <div className="absolute -bottom-[2.3rem] w-max text-center text-base font-medium sm:text-sm">
                <h6>Matching</h6>
              </div>
            </Step>
            <Step
              className=" w-14 h-14 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
              activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
              completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 sm:w-7 sm:h-7"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.5 6.75h-2V6c0-.96-.79-1.75-1.75-1.75H4.5c-.96 0-1.75.79-1.75 1.75v9c0 .96.79 1.75 1.75 1.75h.28c.13 1.67 1.52 3 3.22 3s3.09-1.33 3.22-3h1.55c.13 1.67 1.52 3 3.22 3s3.09-1.33 3.22-3h.28c.96 0 1.75-.79 1.75-1.75v-4.5c0-2.07-1.68-3.75-3.75-3.75ZM4.25 15V6c0-.14.11-.25.25-.25h9.25c.14 0 .25.11.25.25v7.94s-.05.06-.08.08c-.15.13-.29.27-.42.42c-.04.05-.08.09-.11.14a2.9 2.9 0 0 0-.38.66h-2v-.01a2.91 2.91 0 0 0-.27-.49c-.03-.04-.06-.08-.09-.13c-.08-.12-.17-.22-.27-.33c-.04-.04-.07-.08-.11-.12c-.13-.12-.26-.23-.4-.33c-.02-.01-.03-.03-.05-.04c-.15-.1-.31-.18-.47-.26c-.06-.03-.12-.05-.18-.07c-.13-.05-.25-.09-.38-.12c-.06-.01-.12-.03-.18-.04a2.88 2.88 0 0 0-1.18 0c-.06.01-.12.03-.18.04c-.13.03-.26.07-.38.12c-.06.02-.12.04-.18.07c-.16.07-.32.16-.47.26c-.02.01-.03.02-.05.04c-.14.1-.28.21-.4.33c-.04.04-.08.08-.11.12c-.1.1-.19.21-.27.33c-.03.04-.06.08-.09.13c-.1.16-.19.32-.27.49v.01h-.5c-.14 0-.25-.11-.25-.25ZM8 18.25c-.96 0-1.75-.79-1.75-1.75a1.69 1.69 0 0 1 .24-.85c.01-.03.03-.05.04-.08c.09-.14.2-.27.33-.38c.03-.02.05-.04.08-.06c.13-.1.28-.19.44-.25c.02 0 .05-.02.08-.02c.17-.06.36-.1.55-.1s.37.04.55.1c.03 0 .05.01.08.02c.16.06.31.15.44.25c.03.02.05.04.08.06c.13.11.24.24.33.38c.02.02.03.05.04.08c.09.16.16.32.2.5c.02.11.04.23.04.35c0 .96-.79 1.75-1.75 1.75Zm8 0c-.96 0-1.75-.79-1.75-1.75c0-.12.01-.24.04-.35c.03-.12.06-.24.11-.35v-.02c.05-.1.1-.2.17-.29c.01-.02.03-.03.04-.05a2 2 0 0 1 .19-.22c.02-.02.04-.03.06-.05c.07-.06.15-.12.23-.17c.02-.01.05-.03.08-.04c.09-.05.19-.09.29-.12c.04-.01.08-.03.13-.04c.13-.03.27-.05.41-.05c.19 0 .37.04.55.1c.03 0 .05.01.08.02c.16.06.31.15.44.25c.03.02.05.04.08.06c.13.11.24.24.33.38c.02.02.03.05.04.08c.09.16.16.32.2.5c.02.11.04.23.04.35c0 .96-.79 1.75-1.75 1.75Zm-.5-7v-3h2c1.24 0 2.25 1.01 2.25 2.25v.75H15.5Z"
                />
              </svg>
              <div className="absolute -bottom-[2.3rem] w-max text-center text-base font-medium sm:text-sm">
                <h6>Delivery</h6>
              </div>
            </Step>
            <Step
              className=" w-14 h-14 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
              activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
              completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-5 sm:h-5"
                viewBox="0 0 100 100">
                <path
                  fill="currentColor"
                  d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0Zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z"
                />
                <path
                  fill="currentColor"
                  d="m68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011zM34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z"
                  color="currentColor"
                />
              </svg>
              <div className="absolute -bottom-[2.3rem] w-max text-center text-base font-medium sm:text-sm">
                <h6>Received</h6>
              </div>
            </Step>
          </Stepper>
        </div>
        <div className="">
          <Timeline>
            <TimelineItem className=" h-16">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon color="blue" />
                <div className="flex justify-between w-full items-center">
                  <p className=" text-sm sm:text-xs font-medium">
                    Dimasukkan dalam sistem
                  </p>
                  <p className=" text-sm sm:text-xs text-end whitespace-nowrap">
                    2023-07-27
                    <br />
                    14:20:29
                  </p>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className=" h-16">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon color="red" />
                <div className="flex justify-between w-full items-center">
                  <p className=" text-sm sm:text-xs font-medium">
                    Dalam proses pengecekan
                  </p>
                  <p className=" text-sm sm:text-xs text-end whitespace-nowrap">
                    2023-07-27
                    <br />
                    14:20:29
                  </p>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className=" h-16">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon color="yellow" />
                <div className="flex justify-between w-full items-center">
                  <p className=" text-sm sm:text-xs font-medium">
                    Dalam Perjalan [IMRAN]
                  </p>
                  <p className=" text-sm sm:text-xs text-end whitespace-nowrap">
                    2023-07-27
                    <br />
                    14:20:29
                  </p>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className="h-16 sm:h-8">
              <TimelineHeader className="h-3">
                <TimelineIcon color="green" />
                <div className="flex justify-between w-full items-center">
                  <p className=" text-sm sm:text-xs font-medium">
                    Diterima Oleh [Rian]
                  </p>
                  <p className=" text-sm sm:text-xs text-end whitespace-nowrap">
                    2023-07-27
                    <br />
                    14:20:29
                  </p>
                </div>
              </TimelineHeader>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
