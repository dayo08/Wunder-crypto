import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Pie, Button } from "../components";
import { ecomPieChartData } from "../data/dummy";
import { ImCheckmark } from "react-icons/im";
import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const { currentColor } = useStateContext();
  const [active, setactive] = useState(1);
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-24 md:mt-3">
        <div className="bg-slate-200  dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
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
              <Button
                color="white"
                bgColor={currentColor}
                text="Manage"
                borderRadius="5px"
              />
            </div>
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Connect an exchange"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-200 dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
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
              <Button
                color="white"
                bgColor={currentColor}
                text="Create a trade"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-200 dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
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
              <Button
                color="white"
                bgColor={currentColor}
                text="Choose a signal provider"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-3 place-content-stretch place-items-stretch  m-3 ">
        <div className="2xl:col-span-1">
          <div className="  dark:text-gray-200 dark:bg-[#20242b] h rounded-xl  md:w-500 p-8 m-3   bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400 dark:text">
                  Portfolio Value
                </p>
                <p className="md:text-2xl text-xl text-[#33373e] font-bold">
                  $63,448.78
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                BTC{" "}
                <span className="text-gray-400 dark:text opacity-50">
                  0.00000
                </span>
              </p>
              <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                ETH{" "}
                <span className="text-gray-400 dark:text opacity-50">
                  0.00000
                </span>
              </p>
            </div>
          </div>
          <div className="  dark:text-gray-200 dark:bg-[#20242b] h rounded-xl  md:w-500 p-8 m-3    bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Profit and Loss</p>
                <p className="md:text-2xl text-xl text-[#33373e] font-bold">
                  $63,448.78
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="flex  flex-col gap-3">
                {" "}
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Unrealized P/L{" "}
                  <span className="text-gray-400 dark:text opacity-50">
                    $0.00000
                  </span>
                </p>
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Last 30 days{" "}
                  <span className="text-gray-400 dark:text opacity-50">$0</span>
                </p>
              </div>
              <div className="flex  flex-col gap-3">
                {" "}
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Last 7 days{" "}
                  <span className="text-gray-400 dark:text opacity-50">$0</span>
                </p>
                <p className="md:text-xl text-lg font-bold text-gray-400 dark:text">
                  Overall{" "}
                  <span className="text-gray-400 dark:text opacity-50">$0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-2 dark:text-gray-200 dark:bg-[#20242b] rounded-xl">
          <div className=" p-3 ">
            <div className="md:text-2xl text-lg font-bold mb-5">Portfolio</div>
            <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
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
                Assets
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
                Assets by Exchange
              </div>
              <div
                style={{ padding: "16px 0 20px" }}
                className={`${
                  active === 3
                    ? "border-b-4 border-[#03c9d7]  hover:text-[#598fff]"
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
            <div className="bg-white  dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
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
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Update"
                  borderRadius="5px"
                />
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
      <div className="2xl:col-span-2 bg-slate-200  dark:text-gray-200 dark:bg-[#20242b] rounded-xl m-3">
        <div className="border-b  border-white p-3 ">
          <div className="md:text-2xl text-lg font-bold mb-5">Analytics</div>
          <div className="flex md:text-xl text-base font-bold gap-8">
            <div className="border-b-4 border-[#03c9d7] ">
              Trader's API Accounts
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-3 md:gap-10 gap-5 justify-start items-center">
          <div>
            <select className="dropdown list">
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
              className="dark:text-gray-200 p-1 dark:bg-[#20242b] border-2 rounded"
            />
          </div>
          <div>
            <Button
              color="white"
              bgColor={currentColor}
              text="Filter"
              borderRadius="5px"
            />
          </div>
        </div>
        <p className="p-3">No matching records found.</p>
      </div>
    </div>
  );
};

export default Dashboard;
