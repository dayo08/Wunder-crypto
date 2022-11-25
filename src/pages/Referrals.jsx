import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";

function Referrals() {
  const { currentColor } = useStateContext();
  return (
    <div>
      <div className="grid md:grid-cols-2 mt-24 md:mt-3 gap-5 place-content-start dark:text-gray-200 bg-slate-200  dark:bg-[#20242b] rounded-xl p-8 m-3">
        <div className="grid-cols-1">
          <div className="flex md:gap-8 gap-2 flex-col md:flex-row items-start md:items-center justify-b">
            <div className="font-bold flex flex-col md:gap-5 gap-2 justify-between ">
              <p>Referrals</p>
              <p className="md:p-3">0</p>
            </div>
            <div className=" flex flex-col md:gap-5 gap-2 ">
              <p className="font-bold">Referral link</p>
              <div className="flex gap-3  ">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="bg-slate-200  dark:bg-[#20242b] border  p-3 rounded w-full  outline-none"
                  readOnly
                />
                <div
                  onClick={() => {
                    navigator.clipboard.writeText("hy test user");
                    alert("Successfully copied!");
                  }}
                >
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Copy"
                    borderRadius="2px"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl font-bold mt-2">Share</p>
        </div>
        <div className="grid-cols-1">
          <div>
            <div className="flex gap-8 items-center justify-evenly">
              <div className=" flex flex-col gap-5 justify-between ">
                <p className="font-bold">Total profit</p>
                <p>$ 0</p>
              </div>
              <div className=" flex flex-col gap-5  ">
                <p className="font-bold">Paid out</p>
                <p>$ 0</p>
              </div>
              <div className=" flex flex-col gap-5  ">
                <p className="font-bold">To be paid out</p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2  ">
        <div className="dark:text-gray-200 bg-slate-200  dark:bg-[#20242b] rounded-xl p-8 m-3 ">
          <p className="font-bold">USDT Payout Address (ERC-20)</p>
          <div className="flex justify-center gap-5 mt-2">
            <input
              type="text"
              className="bg-slate-200  dark:bg-[#20242b] border border-[#4f79d3] w-full outline-none"
            />
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Save"
                borderRadius="2px"
              />
            </div>
          </div>
        </div>
        <div className="dark:text-gray-200 bg-slate-200  dark:bg-[#20242b] rounded-xl p-8 m-3 ">
          <p className="font-bold">USDT Payout Address (TRC-20)</p>
          <div className="flex justify-center gap-5 mt-2">
            <input
              type="text"
              className="bg-slate-200  dark:bg-[#20242b] border border-[#4f79d3] w-full  outline-none"
            />
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Save"
                borderRadius="2px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="bg-slate-200  dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Benefits of the referral program</p>
              </div>
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">
            ✅ Connect an exchange using API Key or manage already connected
            exchange accounts.
          </p>
          <p className="text-gray-400 max-w-md">✅ Unlimited network growth.</p>
        </div>
        <div className="bg-slate-200 dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">What will your referral receive?</p>
              </div>
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">
            ✅ 10% discount on any one-month subscription plan. Lifetime.
          </p>
        </div>
        <div className="bg-slate-200 dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Marketplace</p>
              </div>
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">1. Sign up on WunderTrading.</p>
          <p className="text-gray-400 max-w-md">
            2. Share your referral link to your crypto community.
          </p>
          <p className="text-gray-400 max-w-md">
            3. Track your earning and receive the commission*.
          </p>
          <p>
            *Commission is paid on a monthly basis (15th day of each month).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
