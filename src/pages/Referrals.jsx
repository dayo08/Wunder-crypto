import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";

function Referrals() {
  const { currentColor } = useStateContext();
  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 dark:bg-[#2c313c]   bg-white p-3 gap-5 place-content-start dark:text-gray-200  m-3">
          <div className="grid-cols-1">
            <div className="flex md:gap-8 gap-2 flex-col md:flex-row items-start md:items-center justify-b">
              <div className="font-bold flex dark:textflex-col md:gap-5 gap-2 justify-between ">
                <p>Referrals</p>
                <p className="md:p-3">0</p>
              </div>
              <div className=" flex flex-col justify-center md:gap-5 gap-2 ">
                <p className="font-bold">Referral link</p>
                <div className="flex gap-3  ">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="bg-white  bg-transparent  border border-[#3c60c3] py-2 px-4  rounded w-full  outline-none"
                    readOnly=""
                  />
                  <div>
                    <button className="  text-[#4f79d3] hover:text-white hover:bg-[#3c60c3] border-[#3c60c3] dark:hover:text-white dark:text-[#3c60c3] font-bold rounded btn">
                      Copy
                    </button>
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
          <div className="dark:text-gray-200 bg-white  dark:bg-[#2c313c]   p-4 m-3 ">
            <p className="font-bold">USDT Payout Address (ERC-20)</p>
            <div className="flex justify-center gap-5 mt-2">
              <input
                type="text"
                className="bg-white pl-2 dark:bg-[#2c313c]  border border-[#4f79d3] w-full outline-none"
              />
              <div>
                <button className=" text-[#4f79d3] hover:text-white hover:bg-[#3c60c3] border-[#3c60c3] dark:hover:text-white dark:text-[#3c60c3] font-bold rounded btn">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="dark:text-gray-200 bg-white  dark:bg-[#2c313c]   p-4 m-3 ">
            <p className="font-bold">USDT Payout Address (TRC-20)</p>
            <div className="flex justify-center gap-5 mt-2">
              <input
                type="text"
                className="bg-white  dark:bg-[#2c313c] pl-2  border border-[#4f79d3] w-full  outline-none"
              />
              <div>
                <button className="  hover:bg-[#3c60c3] border-[#3c60c3] text-[#4f79d3] hover:text-white dark:hover:text-white dark:text-[#3c60c3]  font-bold rounded btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start ">
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-4 m-3 ">
            <div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center gap-2">
                  <p className=" font-bold ">
                    Benefits of the referral program
                  </p>
                </div>
              </div>
            </div>
            <p className="text-black dark:text-white text-sm">
              • Connect an exchange using API Key or manage already connected{" "}
              <br />
              exchange accounts.
            </p>
            <p className="text-black dark:text-white ">
              {" "}
              • Unlimited network growth.
            </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-4 m-3 ">
            <div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center gap-2">
                  <p className=" font-bold ">
                    What will your referral receive?
                  </p>
                </div>
              </div>
            </div>
            <p className="text-black dark:text-white  text-sm">
              • 10% discount on any one-month subscription plan. Lifetime.
            </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-4 m-3 ">
            <div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center gap-2">
                  <p className=" font-bold ">Marketplace</p>
                </div>
              </div>
            </div>
            <p className="text-black dark:text-white text-sm">
              1. Sign up on WunderTrading.
            </p>
            <p className="text-black dark:text-white text-sm">
              2. Share your referral link to your crypto community.
            </p>
            <p className="text-black dark:text-white text-sm">
              3. Track your earning and receive the commission*.
            </p>
            <p className="text-sm text-[#3c60c3] ml-5">
              *Commission is paid on a monthly basis (15th day of each month).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
