import { useContext } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
} from "@material-tailwind/react";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";
import { DELIVERY, ENTRY, MATCHING, RECEIVED } from "../Icon";

function TrackingInfo() {
  const { order, authenticated } = useContext(OrderContext);
  const queryClient = useQueryClient();

  const data = authenticated
    ? queryClient.getQueryData(["TrackShipInfo", order])
    : null;

  return (
    <div className="bg-white rounded-lg px-8 py-6 flex flex-col gap-19 sm:gap-17 sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <div className="mt-6">
        <Stepper
          activeStep={data?.Tracking.length - 1}
          lineClassName="bg-gray-500 h-2"
          activeLineClassName="bg-[--maincolor]"
          className=" z-0">
          <Step
            className="w-13 h-13 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
            activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
            completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
            <ENTRY />
            <div className="absolute z-10 -bottom-[2.3rem] sm:-bottom-[1.75rem] w-max text-center text-base font-medium sm:text-xs ">
              <h6 className=" font-poppins font-normal ">Entry</h6>
            </div>
          </Step>
          <Step
            className="w-13 h-13 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
            activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
            completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
            <MATCHING />
            <div className="absolute z-10 -bottom-[2.3rem] sm:-bottom-[1.75rem] w-max text-center text-base font-medium sm:text-xs">
              <h6 className=" font-poppins font-normal ">Matching</h6>
            </div>
          </Step>
          <Step
            className="w-13 h-13 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
            activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
            completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
            <DELIVERY />
            <div className="absolute z-10 -bottom-[2.3rem] sm:-bottom-[1.75rem] w-max text-center text-base font-medium sm:text-xs">
              <h6 className=" font-poppins font-normal ">Delivery</h6>
            </div>
          </Step>
          <Step
            className="w-13 h-13 sm:w-10 sm:h-10 bg-gray-100 outline outline-3 outline-gray-500 text-gray-500"
            activeClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]"
            completedClassName="outline-[--maincolor] bg-gray-100 text-[--maincolor]">
            <RECEIVED />
            <div className="absolute -bottom-[2.3rem] sm:-bottom-[1.75rem] w-max text-center text-base font-medium sm:text-xs">
              <h6 className=" font-poppins font-normal ">Received</h6>
            </div>
          </Step>
        </Stepper>
      </div>
      <div className="z-0">
        <Timeline>
          {data?.Tracking.map((status, index) => (
            <TimelineItem key={index} className={index === 3 ? "h-8" : "h-16"}>
              {index !== data?.Tracking.length - 1 && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon
                  color={
                    index === 0
                      ? "blue"
                      : index === 1
                      ? "red"
                      : index === 2
                      ? "yellow"
                      : "green"
                  }
                />
                <div className="flex justify-between w-full items-center">
                  <p className="text-sm sm:text-xs font-medium">
                    {status.Description}
                  </p>
                  <p className="text-sm sm:text-xs text-end whitespace-nowrap">
                    {new Date(status.Datetime)
                      .toLocaleDateString("en-GB")
                      .split("/")
                      .reverse()
                      .join("-")}
                    <br />
                    {new Date(status.Datetime).toLocaleTimeString("en-GB")}
                  </p>
                </div>
              </TimelineHeader>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default TrackingInfo;
