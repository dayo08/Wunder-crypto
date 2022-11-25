import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Pie, Button } from "../components";
import { ecomPieChartData } from "../data/dummy";
import { ImCheckmark } from "react-icons/im";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { currentColor } = useStateContext();
  const [active, setactive] = useState(1);
  return (
    <div>
      <div className="flex flex-wrap justify-start mt-24 md:mt-3">
        <div className="bg-white  dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-5 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <ImCheckmark className="text-[#02d29a]" />
                <p className=" font-bold ">My exchange</p>
              </div>
              <AiFillQuestionCircle className="text-[#02d29a]" />
            </div>
          </div>
          <p className="text-gray-400 max-w-md">
            Connect an exchange using API Key or manage already connected
            exchange accounts.
          </p>
          <div className="flex gap-5 mt-4">
            <div>
              <Link to="/MyExchanges">
                <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3] border border-[#3c60c3]  font-bold py-2 px-4 rounded ">
                  Manage
                </button>
              </Link>
            </div>
            <div>
              <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                Connect an exchange
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-5 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <ImCheckmark className="text-[#02d29a]" />
                <p className=" font-bold ">Terminal</p>
              </div>
              <AiFillQuestionCircle className="text-[#02d29a]" />
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">
            Flexible way of creating orders for smart trading: adding and
            editing Take Profit, Stop Loss and Trailing stops to any order.
          </p>
          <div className="flex gap-5 mt-4">
            <div>
              <Link to="/Terminal">
                <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                  Create a trade
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c]  md:w-500 p-5 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <ImCheckmark className="text-[#02d29a]" />
                <p className=" font-bold ">Marketplace</p>
              </div>
              <AiFillQuestionCircle className="text-[#02d29a]" />
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">
            Copy trade the best crypto traders and bots with a transparent track
            record.
          </p>
          <div className="flex gap-5 mt-4">
            <div>
              <Link to="/Marketplace">
                <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                  Choose a signal provider
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-3 place-content-stretch place-items-stretch  m-3 ">
        <div className="2xl:col-span-1">
          <div className="  dark:text-white dark:bg-[#598fff] bg-[#0143cc]   h rounded-xl  md:w-500 p-5 m-3   bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white dark:text">
                  Portfolio Value
                </p>
                <p className="md:text-2xl text-xl  font-bold mt-6">
                  <span className="text-gray-200">$</span>{" "}
                  <span className="text-white text-4xl">0.0000</span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                <p className="font-bold text-gray-500 ">BTC </p>
                <span className="text-white ">0.0000</span>
                <p className="md:text-2xl text-xl  font-bold"></p>
              </p>

              <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                <p className="font-bold text-gray-500 "> ETH </p>
                <span className="text-white ">0.0000</span>
                <p className="md:text-2xl text-xl  font-bold"></p>
              </p>
            </div>
          </div>
          <div className="  dark:text-gray-200 dark:bg-[#2c313c] h rounded-xl bg-white md:w-500 p-5 m-3    bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-black dark:text-white">
                  Profit and Loss
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="flex  flex-col gap-3">
                {" "}
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Unrealized P/L{" "}
                  <p className="md:text-2xl text-xl  font-bold py-3">
                    <span className="text-gray-500">$</span>{" "}
                    <span className="dark:text-white text-black text-4xl">
                      0.0000
                    </span>
                  </p>
                </p>
                <p className="md:text-xl mt-2 text-lg font-bold text-gray-400 dark:text">
                  Last 30 days{" "}
                  <p className="md:text-2xl text-xl  font-bold">
                    <span className="text-gray-500">$</span>
                    <span className="dark:text-white text-black ">0.0000</span>
                  </p>
                </p>
              </div>
              <div className="flex  flex-col gap-3">
                {" "}
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Last 7 days{" "}
                  <p className="md:text-2xl text-xl  font-bold py-3">
                    <span className="text-gray-500">$</span>{" "}
                    <span className="dark:text-white text-black text-4xl">
                      0.0000
                    </span>
                  </p>
                </p>
                <p className="md:text-xl mt-2 text-lg font-bold text-gray-400 dark:text">
                  Overall{" "}
                  <p className="md:text-2xl text-xl  font-bold">
                    <span className="text-gray-500">$</span>{" "}
                    <span className="dark:text-white text-black ">0.0000</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-2 bg-white dark:text-gray-200 dark:bg-[#2c313c] rounded-xl">
          <div className=" p-3 ">
            <div className="md:text-2xl text-lg font-bold mb-5">Portfolio</div>
            <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
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
                Assets
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
                Assets by Exchange
              </div>
              <div
                style={{ padding: "16px 0 20px" }}
                className={`${
                  active === 3
                    ? "border-b-4 border-[#598fff]  hover:text-[#598fff]"
                    : "deActive hover:text-[#598fff]"
                }`}
                onClick={() => {
                  setactive(3);
                }}
              >
                API Profile
              </div>
            </div>
          </div>
          <div className="flex justify-evenly flex-col xl:flex-row items-center">
            <div className="bg-white  dark:text-gray-200 dark:bg-[#2c313c]  md:w-400 p-5 m-3 flex justify-center items-center gap-10">
              <div className="md:w-60 w-40 mx-auto">
                <Pie
                  id="pie-chart"
                  data={ecomPieChartData}
                  legendVisiblity={false}
                  height="200px"
                />
              </div>
            </div>

            <div className=" flex flex-col items-center justify-center  mt-5">
              <div className="flex justify-center items-center gap-2">
                <p>Total ($): 0.000</p>

                <button className="hover:text-white  hover:bg-[#02d29a]  text-[#02d29a] border border-[#02d29a]  font-bold py-2 px-4 rounded ">
                  Update
                </button>
              </div>

              <div className="mt-5">
                {active === 1 && (
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Coin</th>
                        <th scope="col">Amount</th>
                        <th scope="col">USD Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Coin">Dust (USD)</td>
                        <td data-label="Amount">0.00000 </td>
                        <td data-label="USD Value">0.00</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {active === 2 && (
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Exchange</th>
                        <th scope="col">USD Value</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Exchange">BINANCE-SPOTF</td>
                        <td data-label="USD Value">0.00000 </td>
                        <td data-label="%">0.00</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {active === 3 && (
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">API Profile</th>
                        <th scope="col">USD Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="API Profile">test (BINANCE-SPOT)</td>
                        <td data-label="USD Value">0.00000 </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:col-span-2 bg-white  dark:text-gray-200 dark:bg-[#2c313c] rounded-xl m-3">
        <div className="border-b  border-white p-3 ">
          <div className="md:text-2xl text-lg font-bold mb-5">Analytics</div>
          <div className="flex md:text-xl text-base font-bold gap-8">
            <div className="border-b-4 border-[#3c60c3] ">
              Trader's API Accounts
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-3 md:gap-10 gap-5 justify-start items-center">
          <div>
            <select className="bg-[#e1e3e9] dark:bg-[#31353e] dark:text-white px-2 py-1 rounded w-56 text-sm">
              <option value="AllTime">All Time</option>
              <option value="LastMonth">Last Month</option>
              <option value="LastWeek"> Last Week</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              name=""
              id=""
              placeholder="Min Trades Quantity"
              className="dark:text-gray-200 p-1 dark:bg-[#2c313c] border-2 rounded"
            />
          </div>
          <div>
            <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
              Filter
            </button>
          </div>
        </div>
        <p className="p-3">No matching records found.</p>
      </div>
    </div>
  );
};

export default Dashboard;
