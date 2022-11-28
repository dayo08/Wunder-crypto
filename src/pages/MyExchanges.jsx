import React, { useEffect } from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import binance from "../data/binance.webp";
import bitmex from "../data/bitmex.webp";
import { AiOutlineSave } from "react-icons/ai";
import "./table.css";
import { Link } from "react-router-dom";

const Orders = () => {
  const { currentColor } = useStateContext();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="2xl:col-span-2     dark:text-gray-200     ">
      <div className="border-b bg-white dark:bg-[#20252a] border-gray-500  ">
        <div className="px-6 pt-6">
          <div className="md:text-xl text-lg font-bold ">My Exchanges</div>
          <div className="flex md:text-lg  text-base font-bold gap-8">
            <div className="flex text-base font-bold gap-8 cursor-pointer dark:text-white  ">
              <div
                className="border-b-4 hover:text-[#598efe] border-[#598efe]  "
                style={{ padding: "16px 0px 20px" }}
              >
                API Profiles
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#282c34] px-6 pt-3">
        <div className="flex  flex-col mt-3 ">
          <div className="font-bold">Sign up</div>
          <div className="flex justify-start gap-5 mt-2 items-start">
            <div className="w-32 flex justify-start items-start dark:text-gray-200 dark:bg-[#323640] bg-white rounded-xl">
              <img src={binance} alt="" />
            </div>
            <div className="w-32 flex justify-start items-start dark:text-gray-200 dark:bg-[#323640] bg-white rounded-xl">
              <img src={bitmex} alt="" className="w-40" />
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col justify-between md:items-center items-start gap-5 mt-2">
          <div>
            <p class="font-bold">Exchange Accounts</p>
            <p class="text-[#757474] py-2">
              Create and manage exchange accounts.
            </p>
            <div>
              <Link  to="/Createtraderaccount">
                <button class="bg-[#02d29a] text-white px-2 py-1 rounded-sm">
                  Add New
                </button>
              </Link>
            </div>
          </div>
          <div class="md:text-end">
            <p class="font-bold">Default exchange</p>
            <p class="text-[#757474] py-2">Select default exchange.</p>
            <div class="flex gap-2 justify-center md:items-center md:flex-row flex-col">
              <select class="px-3 py-2 text-black rounded w-72">
                <option value="BINANCE-SPOT">BINANCE-SPOT</option>
              </select>
              <div class="dark:text-gray-200 bg-[#02d39b] p-3 rounded-md">
                <AiOutlineSave />
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper mt-10 bg-white dark:bg-[#2c313c] overflow-x-auto">
          <table className="fl-table overflow-y-auto w-20 ">
            <thead>
              <tr>
                <th>Active</th>
                <th className="cursor-pointer">Name of Account</th>
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
                <td>
                  <div className="flex flex-wrap items-start justify-center gap-1">
                    <select className=" text-black border">
                      <option value="error -> Account has no assets!">
                        error -&gt; Account has no assets!
                      </option>
                    </select>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-2xl bg-[#02d29a] p-"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z" />
                    </svg>
                  </div>
                </td>
                <td>23*****13</td>
                <td>123*****132</td>
                <td className="flex md:flex-wrap flex-row gap-2 md:justify-center items-center">
                  <div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer outline-none"
                        defaultValue=""
                      />
                      <div className="w-11 h-6 bg-gray-200 outline-none rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                  </div>
                  <div>
                    <button className="bg-[#02d29a] px-2 py-1 rounded-sm">
                      edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#02d29a] px-2 py-1 rounded-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Orders;
