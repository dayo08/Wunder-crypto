import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Billingprice from "./Billingprice";
import Billingcomaper from "./Billingcomaper";
import "./Billinghistory.css";
function Billing() {
  const [active, setactive] = useState(1);
  const { currentColor } = useStateContext();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" dark:text-gray-200">
      <div className=" dark:text-gray-200 bg-white dark:bg-[#20252a]  ">
        <div className="px-6 pt-6 ">
          <div className="md:text-xl text-lg font-bold mb-5">Billing</div>
          <div className="flex md:text-xl items-start justify-start text-base font-bold gap-8 cursor-pointer dark:text-white border-b border-[#828282]">
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 1
                  ? "border-b-4 hover:text-[#598fff] border-[#598fff]  "
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
                  ? "border-b-4 border-[#598fff] hover:text-[#598fff] "
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
            <div className="dark:text-gray-200 bg-white  dark:bg-[#2c313c]  px-6 py-6 m-3  ">
              <p className="font-bold">Current plan</p>
              <p className="lg:text-3xl md:text-xl text-lg font-bold mt-5">
                Pro ( 2 days left )
              </p>
            </div>
            <div className="dark:text-gray-200 bg-white  dark:bg-[#2c313c]  px-6 py-6  m-3 ">
              <p className="font-bold">Promo code</p>
              <div className="flex justify-center ">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="bg-white  dark:bg-[#2c313c] border-b w-full outline-none"
                />
                <div>
                  <button className="  hover:bg-[#3c60c3] hover:text-white text-[#3c60c3] border-[#3c60c3] dark:hover:text-white dark:text-[#3c60c3]  font-bold rounded btn">
                    Apply
                  </button>
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
          <div className="table-wrapper-Billinghistory px-3  py-5">
            <table className="Billinghistory dark:bg-[#2c313c] bg-white">
              <thead className="">
                <tr>
                  <th className="text-[#598fff] hover:border-b font-bold   cursor-pointerF">
                    Subscription start date
                  </th>
                  <th className="text-[#598fff] font-bold">Subscription end date</th>
                  <th className="text-[#598fff]"> Subscription plan</th>
                  <th>Price ($)</th>
                  <th>Payment method</th>
                  <th>Invoice</th>
                  <th className="text-[#598fff]">Status</th>
                </tr>
              </thead>
              <tbody className="dark:hover:bg-[#62676D] hover:bg-[#f5f6fa] hover:shadow-sm ">
                <tr>
                  <td>2022-11-26</td>
                  <td>2023-11-26</td>
                  <td>Free</td>
                  <td>0.00</td>
                  <td>-</td>
                  <td>-</td>
                  <td className="text-[#08bb8c] font-bold">Active</td>
                </tr>
              </tbody>
              <tbody />
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Billing;
