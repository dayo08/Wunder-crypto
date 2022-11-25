import React from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import binance from "../data/binance.webp";
import bitmex from "../data/bitmex.webp";
import { AiOutlineSave } from "react-icons/ai";
import "./table.css";

const Orders = () => {
  const { currentColor } = useStateContext();
  return (
    <div>
      <div className="2xl:col-span-2 bg-slate-200  dark:text-gray-200 dark:bg-[#20242b] rounded-xl m-3 p-5 mt-24 md:mt-3">
        <div className="border-b  border-white  ">
          <div className="md:text-2xl text-lg font-bold mb-5">My Exchanges</div>
          <div className="flex md:text-xl text-base font-bold gap-8">
            <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 ">
              <div
                style={{ padding: "16px 0 20px" }}
                className="border-b-4 hover:text-[#598fff] border-[#03c9d7]  "
              >
                API Profiles
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col mt-3 ">
          <div className="font-bold">Sign up</div>
          <div className="flex justify-start  items-start">
            <div className="w-40 flex justify-start items-start dark:text-gray-200 dark:bg-[#20242b] rounded-xl">
              <img src={binance} alt="" />
            </div>
            <div className="w-40 flex justify-start items-start dark:text-gray-200 dark:bg-[#20242b] rounded-xl">
              <img src={bitmex} alt="" className="w-40" />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-5 mt-2">
          <div>
            <p className="font-bold">Exchange Accounts</p>
            <p className="text-[#757474] py-2">
              Create and manage exchange accounts.
            </p>
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Add New"
                borderRadius="5px"
              />
            </div>
          </div>
          <div className="md:text-end">
            <p className="font-bold">Exchange Accounts</p>
            <p className="text-[#757474] py-2">Select default exchange.</p>
            <div className="flex gap-2 justify-center md:items-center md:flex-row flex-col">
              <select className="dropdown list">
                <option value="BINANCE-SPOT">BINANCE-SPOT</option>
              </select>
              <div className="dark:text-gray-200 bg-[#02d39b] p-3 rounded-md">
                <AiOutlineSave />
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper mt-10">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Active</th>
                <th>Name of Account</th>
                <th>Exchange</th>
                <th>Balances</th>
                <th>API</th>
                <th>Secret</th>
                <th>Actions</th>
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
      </div>
    </div>
  );
};
export default Orders;
