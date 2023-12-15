import React, { useEffect } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react';
import shipping from '../../../src/assets/shipping.png';
import Button from '../Button';
import Dropdown from '../Dropdown';
import { data } from '../../utils/Weight';

export default function CheckPrices({ open, handleOpen }) {
  const [provinces, setProvinces] = React.useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/shipment-price')
      .then((res) => res.json())
      .then((data) => {
        setProvinces(data.data);
      });
  }, []);

  return (
    <>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: 0 },
        }}
        className="xl:!max-w-[35%] xl:!min-w-[35%] lg:!max-w-[40%] lg:!min-w-[40%] md:!max-w-[50%] md:!min-w-[50%]">
        <div className="flex flex-col items-center">
          <img className="w-2/3 sm:w-56" src={shipping} />
        </div>

        <DialogBody>
          <div className="flex flex-col gap-5">
            <div className=" gap-2 flex flex-row justify-around">
              <Dropdown
                title="From"
                data={provinces}
                displayItem={(item) => `${item.kabupaten}, ${item.kecamatan}`}
                selectItem={(item) => item.kecamatan}
              />
              <Dropdown
                title="Delivery to"
                data={provinces}
                displayItem={(item) => `${item.kabupaten}, ${item.kecamatan}`}
                selectItem={(item) => item.kecamatan}
              />
            </div>
            <div className=" mt-4 flex flex-row gap-2 justify-around">
              <Dropdown
                title="Weigth"
                data={data.weights}
                displayItem={(item) => item.weight_range}
                selectItem={(item) => item.weight_range}
              />
              <div>
                <p className="mb-1 font-medium text-black text-sm font-poppins">
                  Estimated Cost
                </p>
                <div className="rounded-md w-[225px] h-[40px] border border-black">
                  <p className="text-gray-900 px-[12px] py-[5px]">Rp0</p>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="justify-center">
          <Button type="submit" text="Check" />
        </DialogFooter>
      </Dialog>
    </>
  );
}
