import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";
import Billingprice from "./Billingprice";
import Billingcomaper from "./Billingcomaper";
function Billing() {
  const [active, setactive] = useState(1);
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24 md:mt-3 dark:text-gray-200">
      <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl px-8 pt-5 m-3 border-b border-white ">
        <div className="p-3 ">
          <div className="md:text-2xl text-lg font-bold mb-5">Billing</div>
          <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer">
            <div
              className={`${
                active === 1 ? "border-b-4 pb-5 border-[#03c9d7]  " : "deActive"
              }`}
              onClick={() => {
                setactive(1);
              }}
            >
              Pricing
            </div>
            <div
              onClick={() => {
                setactive(2);
              }}
              className={`${
                active === 2 ? "border-b-4 pb-5 border-[#03c9d7]  " : "deActive"
              }`}
            >
              Billing history
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2  ">
        <div className="dark:text-gray-200 bg-slate-200  dark:bg-secondary-dark-bg rounded-xl p-8 m-3 ">
          <p className="font-bold">Current plan</p>
          <p className="lg:text-3xl md:text-xl text-lg font-bold mt-5">
            Pro ( 2 days left )
          </p>
        </div>
        <div className="dark:text-gray-200 bg-slate-200  dark:bg-secondary-dark-bg rounded-xl p-8 m-3 ">
          <p className="font-bold">Promo code</p>
          <div className="flex justify-center ">
            <input
              type="text"
              placeholder="Enter promo code"
              className="bg-slate-200  dark:bg-secondary-dark-bg border-b w-full outline-none"
            />
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Apply"
                borderRadius="2px"
              />
            </div>
          </div>
        </div>
      </div>

      <Billingprice/>
      <Billingcomaper/>
    </div>
  );
}

export default Billing;
