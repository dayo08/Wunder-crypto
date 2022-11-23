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
          <div className="flex md:text-xl items-start justify-start text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 1
                  ? "border-b-4 hover:text-[#598fff] border-[#03c9d7]  "
                  : "deActive hover:text-[#598fff]"
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
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 2
                  ? "border-b-4 border-[#03c9d7] hover:text-[#598fff] "
                  : "deActive hover:text-[#598fff]"
              }`}
            >
              Billing history
            </div>
          </div>
        </div>
      </div>
      {active === 1 && (
        <>
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
          <Billingprice />
          <Billingcomaper />
        </>
      )}
      {active === 2 && (
        <>
          <div className="table-wrapper mt-10 p-8 ">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Subscription start date</th>
                  <th>Subscription end date</th>
                  <th> Subscription plan</th>
                  <th>Price ($)</th>
                  <th>Payment method</th>
                  <th>Invoice</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                </tr>
              </tbody>
              <tbody></tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Billing;
