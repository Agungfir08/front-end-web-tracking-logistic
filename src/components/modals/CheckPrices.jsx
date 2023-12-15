import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import shipping from "../../../src/assets/shipping.png";

export default function CheckPrices() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        className="!font-poppins !normal-case bg-white cursor-pointer transition hover:text-[--maincolor] text-[--maincolor] px-10 py-2 border-[3px] border-[--maincolor] rounded-xl hover:text-white hover:bg-[--maincolor]"
        onClick={handleOpen}
      >
        Check Prices
      </Button>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        className="xl:!max-w-[35%] xl:!min-w-[35%] lg:!max-w-[40%] lg:!min-w-[40%] md:!max-w-[50%] md:!min-w-[50%]"
      >
        <div className="flex flex-col items-center">
          <img className="w-2/3 sm:w-56" src={shipping} />
        </div>

        <DialogBody>
          <div className="gap-2 flex flex-row justify-around">
            <div className="">
              <p className="mb-1 font-normal text-gray-900 text-sm font-poppins">
                From
              </p>
              <Select label="Select">
              <Option>Bontoala</Option>
                <Option>Kepulauan Sangkarrang</Option>
                <Option>Tamalanrea</Option>
                <Option>Mamajang</Option>
                <Option>Manggala</Option>
                <Option>Mariso</Option>
                <Option>Panakkukang</Option>
                <Option>Rappocini</Option>
                <Option>Tallo</Option>
              </Select>
            </div>
            <div>
              <p className="mb-1 font-normal text-gray-900 text-sm font-poppins">
                Delivery to
              </p>
              <Select className="font-poppins" label="Select">
                <Option>Biringkanaya</Option>
                <Option>Bontoala</Option>
                <Option>Kepulauan Sangkarrang</Option>
                <Option>Tamalanrea</Option>
                <Option>Mamajang</Option>
                <Option>Manggala</Option>
                <Option>Mariso</Option>
                <Option>Panakkukang</Option>
                <Option>Rappocini</Option>
                <Option>Tallo</Option>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-2 justify-around">
            <div className="">
              <p className="mb-1 font-normal text-gray-900 text-sm font-poppins">
                Weight
              </p>
              <Select className="font-poppins" label="Select">
                <Option>1-5</Option>
                <Option>6-10</Option>
                <Option>11-15</Option>
                <Option>16-20</Option>
                <Option disabled>
                  Berat diatas tersebut silahkan menghubungi admin
                </Option>
              </Select>
            </div>
            <div>
              <p className="mb-1 font-normal text-gray-900 text-sm font-poppins">
                Estimated Cost
              </p>
              <div className="outline rounded-md w-[200px] h-[40px] outline-2 outline-black">
                <p className="text-gray-900 px-[12px] py-[5px]">Rp0</p>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="justify-center">
          <Button
            // onClick={handleOpen}
            className="font-poppins bg-[--maincolor] w-[150px] text-white px-5 py-2 rounded-md sm:text-sm"
          >
            Check
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
