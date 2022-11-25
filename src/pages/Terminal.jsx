/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";

const Terminal = () => {
  const [active, setactive] = useState(1);
  const [Order, setorder] = useState(1);
  return (
    <>
      <div className="flex items-center gap-3 p-3">
        <button className="bg-[#02d29a] text-sm p-1 rounded-sm">Update</button>
        <p className="dark:text-gray-200 font-bold">Your Balance:</p>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 place-content-between place-items-stretch">
        <div
          className="col-span-2  py-2 mx-3 xl:sticky top-0"
          style={{ height: 700 }}
        >
          <div style={{ height: "calc(100% - 32px)" }}>
            <div id="" style={{ height: "100%" }}>
              <div
                style={{
                  position: "relative",
                  boxSizing: "content-box",
                  width: "100%",
                  height: "100%",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                  }}
                >
                  <iframe
                    id="tradingview_7a2e4"
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_7a2e4&symbol=BINANCE%3A&interval=30&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Europe%2FRiga&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=wundertrading.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3A#%7B%22page-uri%22%3A%22wundertrading.com%2Fen%2Ftrader%2Ftrading-terminal%22%7D"
                    frameBorder={0}
                    allowTransparency="true"
                    scrolling="no"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "20%", display: "none" }}>
              <h2 className="title">Loading Trading View</h2>
              <h2 className="dot one">.</h2>
              <h2 className="dot two">.</h2>
              <h2 className="dot three">.</h2>
            </div>
            <div
              className="text-[#4e78d3] text-center py-2 mb-2"
              style={{ width: "100%" }}
            >
              <a
                href="https://www.tradingview.com/symbols/BINANCE-BTCUSDT/"
                rel="noopener"
                target="_blank"
              >
                <span id="tradingview-pair-symbol">BINANCE: chart</span>
              </a>{" "}
              <span>by TradingView</span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 ">
            <div className="flex  flex-wrap justify-between items-start ">
              <div className="flex flex-col gap-2 justify-between items-start">
                <p className="font-bold">Exchange</p>
                <select className="w-52 my-2 dark:text-gray-200 outline-none p-3 rounded bg-transparent border-b">
                  <option value="BINANCE-SPOT">BINANCE-SPOT</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start ">
                <p className="font-bold">API</p>
                <select className="w-52 my-2 dark:text-gray-200 outline-none p-3 rounded bg-transparent border-b">
                  <option value="BINANCE-SPOT">BINANCE-SPOT</option>
                </select>
              </div>
            </div>
            <p className="font-bold pt-3">Strategy Type</p>
            <div className="py-3 flex gap-3">
              <button className="bg-[#598fff] hover:bg-[#3c60c3]  text-black dark:text-white font-bold  px-4 py-1 rounded">
                Classic
              </button>
              <button className="hover:bg-[#598fff] border-[#3c60c3] border  text-black dark:text-white font-bold  px-4 py-1 rounded ">
                DCA
              </button>
            </div>
            <div className="py-3 flex justify-start gap-2 items-start flex-wrap">
              <div
                className={`${
                  active === 1
                    ? "bg-[#02d29a] "
                    : "hover:bg-[#02d29a] border  border-[#02d29a] "
                } text-black dark:text-white font-bold  rounded  px-10 py-3 `}
                onClick={() => {
                  setactive(1);
                }}
              >
                Buy / Long
              </div>
              <div
                className={`${
                  active === 2
                    ? "bg-[#e04caf]  "
                    : "hover:bg-[#e04caf] border border-[#e04caf] "
                } text-black dark:text-white font-bold  rounded px-10 py-3`}
                onClick={() => {
                  setactive(1);
                }}
              >
                Sell / Short
              </div>
            </div>
          </div>
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 mt-3">
            <p className="font-bold">Exchange</p>
            <p className=" text-sm text-[#606266] py-2">
              You can trade only those pairs where you have balance above zero
            </p>
            <select className="w-full my-2 dark:text-gray-200 outline-none p-3 rounded bg-transparent border-b" />
          </div>
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]    px-5 py-5 mx-3 mt-3">
            <div className="flex flex-wrap justify-between items-start gap-3 ">
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="font-bold">Order type</p>
                <div className="flex gap-2">
                  <button
                    className={` ${
                      Order === 1 ? "bg-[#598fff]" : " border-[#3c60c3] border"
                    }    text-black dark:text-white text-sm  rounded  px-2 py-2`}
                    onClick={() => {
                      setorder(1);
                    }}
                  >
                    Market
                  </button>
                  <button
                    className={` ${
                      Order === 2 ? "bg-[#598fff]" : " border-[#3c60c3] border"
                    }   text-black dark:text-white text-sm  rounded  px-2 py-2`}
                    onClick={() => {
                      setorder(2);
                    }}
                  >
                    Limit
                  </button>
                  <button
                    className={` ${
                      Order === 3 ? "bg-[#598fff]" : " border-[#3c60c3] border"
                    }   text-black dark:text-white text-sm  rounded  px-2 py-2`}
                    onClick={() => {
                      setorder(3);
                    }}
                  >
                    Stop - Limit
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="font-bold">Price</p>
                <input
                  type="text"
                  className="dark:text-[#606266] outline-none px-1 rounded"
                  placeholder={0.0}
                />
              </div>
            </div>
            {Order === 3 && (
              <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]    mt-3">
                <p className="font-bold">Stop Price</p>
                <input
                  type="number"
                  name=""
                  placeholder={0.0}
                  className="w-full my-2 dark:text-gray-200 outline-none  rounded bg-transparent border-b "
                />
              </div>
            )}
          </div>
          {(Order === 3 || Order === 2) && (
            <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]    px-5 py-2 mx-3 mt-3">
              <p className="font-bold">Time in force</p>
              <p className=" text-sm text-[#606266] py-2">
                Time in minutes before Limit order expires (5-5000 min)
              </p>
              <input
                type="number"
                name=""
                placeholder={0.0}
                className="w-full my-2 dark:text-gray-200 outline-none  rounded bg-transparent border-b "
              />
            </div>
          )}

         
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-5 mx-3 mt-3">
            <p className="font-bold ">Portfolio size</p>
            <div className="py-3 ppx-2">
              <button className=" bg-[#598fff] border-[#3c60c3] border  text-black dark:text-white text-sm  rounded  px-2 py-2">
                Percents
              </button>
              <button className=" false border-[#3c60c3] border  text-black dark:text-white text-sm  rounded  px-2 py-2 ml-3">
                Fixed Amount
              </button>
              <div className="flex gap-5 flex-wrap justify-between ">
                <div>
                  <p className=" text-sm text-[#606266] py-2">Portfolio size</p>
                  <div className="flex ">
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name=""
                        placeholder="0%"
                        className="w-full my-2 dark:text-gray-200 outline-none  rounded bg-transparent border-b "
                        defaultValue={0}
                      />
                      <div className="flex gap-2 cursor-pointer">
                        <p className="border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf]">
                          1%
                        </p>
                        <p className="border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf]">
                          3%
                        </p>
                        <p className="border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf]">
                          5%
                        </p>
                        <p className="border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf]">
                          10%
                        </p>
                        <p className="border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf]">
                          20%
                        </p>
                      </div>
                    </div>
                    <span>%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-sm text-[#606266] py-2">
                    Amount in quote currency
                  </p>
                  <input
                    type="number"
                    className="bg-[#606266] dark:text-white  outline-none px-1 rounded"
                    placeholder={0.0}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 mt-3">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" className="w-4" />
              <p className="font-bold">Keep my position open</p>
            </div>
            <p className=" text-sm text-[#606266] py-2">
              System will keep monitoring the Strategy even if Take Profit or
              Stop Loss are disabled.
            </p>
          </div>
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 mt-3">
            <div className="list-container flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 1"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 1
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 2"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 2
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 3"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 3
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 4"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 5"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 5
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5"
                  defaultValue="Take Profit 6"
                />
                <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                  Take Profit 6
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" className="w-5" />
                  <p className="font-bold">Stop Loss</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" className="w-5" />
                  <p className="font-bold">Move Stop Loss to breakeven</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]  px-5 py-2 mx-3 mt-3">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" className="w-4" />
              <p className="font-bold">Trailing Stop</p>
            </div>
          </div>
          <button className=" flex items-stretch hover:bg-[#598fff] mt-3 border-[#598fff] border px-12 mx-auto py-4 text-black dark:text-white font-bold  rounded-2xl  btn">
            Create a Strategy
          </button>
        </div>
      </div>
    </>
  );
};

export default Terminal;
