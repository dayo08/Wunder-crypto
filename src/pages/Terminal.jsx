/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";

const Terminal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [active, setactive] = useState(1);
  const [Order, setorder] = useState(1);
  const [Portfolio, setPortfolio] = useState(1);
  const [amountfixed, setamountfixed] = useState(1);
  const [takeprofit1, settakeprofit1] = useState(false);
  const [takeprofit2, settakeprofit2] = useState(false);
  const [takeprofit3, settakeprofit3] = useState(false);
  const [takeprofit4, settakeprofit4] = useState(false);
  const [takeprofit5, settakeprofit5] = useState(false);
  const [takeprofit6, settakeprofit6] = useState(false);
  const [Portfoliotakeprofit1, setPortfoliotakeprofit1] = useState(false);
  const [Portfoliotakeprofit11, setPortfoliotakeprofit11] = useState(false);
  const [StopLoss, setStopLoss] = useState(false);
  const [movestoploss, setmovestoploss] = useState(false);
  const activePortfolio = [
    {
      id: 1,
      size: 10,
    },
    {
      id: 2,
      size: 25,
    },
    {
      id: 3,
      size: 50,
    },
    {
      id: 1,
      size: 75,
    },
    {
      id: 1,
      size: 100,
    },
  ];

  const activePortfolio1 = [
    {
      id: 1,
      size: 10,
    },
    {
      id: 2,
      size: 25,
    },
    {
      id: 3,
      size: 50,
    },
    {
      id: 1,
      size: 75,
    },
    {
      id: 1,
      size: 100,
    },
  ];

  const activePortfolio11 = [
    {
      id: 1,
      size: 1,
    },
    {
      id: 2,
      size: 3,
    },
    {
      id: 3,
      size: 5,
    },
    {
      id: 1,
      size: 10,
    },
    {
      id: 1,
      size: 20,
    },
  ];

  const a = [
    {
      id: 0,
      title: "Tkae Profit 1",
      state: takeprofit1,
      setsatte: settakeprofit1,
      onClickfunctopn: () => settakeprofit1(!takeprofit1),
    },
    {
      id: 0,
      title: "Tkae Profit 2",
      state: takeprofit2,
      setsatte: settakeprofit2,
      onClickfunctopn: () => settakeprofit2(!takeprofit2),
    },
    {
      id: 0,
      title: "Tkae Profit 3",
      state: takeprofit3,
      setsatte: settakeprofit3,
      onClickfunctopn: () => settakeprofit3(!takeprofit3),
    },
    {
      id: 0,
      title: "Tkae Profit 4",
      state: takeprofit4,
      setsatte: settakeprofit4,
      onClickfunctopn: () => settakeprofit4(!takeprofit4),
    },
    {
      id: 0,
      title: "Tkae Profit 5",
      state: takeprofit5,
      setsatte: settakeprofit5,
      onClickfunctopn: () => settakeprofit5(!takeprofit5),
    },
    {
      id: 0,
      title: "Tkae Profit 6",
      state: takeprofit6,
      setsatte: settakeprofit6,
      onClickfunctopn: () => settakeprofit6(!takeprofit6),
    },
  ];

  return (
    <div className="">
      <div className="flex items-center gap-3 p-3">
        <button className="bg-[#02d29a] text-sm p-1 rounded-sm">Update</button>
        <p className="dark:text-gray-200 font-bold">Your Balance:</p>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 place-content-between place-items-stretch">
        {/* BINANCE: chart by TradingView */}
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
          {/* Exchange && API*/}
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
          {/* Exchange */}
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 mt-3">
            <p className="font-bold">Exchange</p>
            <p className=" text-sm text-[#606266] py-2">
              You can trade only those pairs where you have balance above zero
            </p>
            <select className="w-full my-2 dark:text-gray-200 outline-none p-3 rounded bg-transparent border-b" />
          </div>
          {/* Order type */}
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
                  disabled={Order === 1}
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

          {/* Portfolio size
           */}
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-5 mx-3 mt-3">
            <p className="font-bold ">Portfolio size</p>
            <div className="py-3 ppx-2">
              <button
                className={` ${
                  amountfixed === 1
                    ? "bg-[#598fff]"
                    : " border-[#3c60c3] border"
                }    text-black dark:text-white text-sm  rounded  px-2 py-2`}
                onClick={() => {
                  setamountfixed(1);
                }}
              >
                Percents
              </button>
              <button
                className={` ${
                  amountfixed === 2
                    ? "bg-[#598fff]"
                    : " border-[#3c60c3] border"
                }   text-black dark:text-white text-sm  rounded  px-2 py-2 ml-2`}
                onClick={() => {
                  setamountfixed(2);
                }}
              >
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
                        placeholder="0"
                        className="w-full my-2 dark:text-gray-200 outline-none   bg-transparent border-b "
                        defaultValue={0}
                        value={Portfolio}
                        disabled={amountfixed === 2}
                      />
                      <div className="flex gap-2 cursor-pointer">
                        {activePortfolio.map((i, id) => (
                          <p
                            className={`border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf] ${
                              Portfolio === i.size ? "bg-[#e04caf]" : null
                            }`}
                            onClick={() => setPortfolio(i.size)}
                            disabled={amountfixed === 2}
                          >
                            {i.size}%
                          </p>
                        ))}
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
                    className="dark:text-[#606266]  outline-none px-1 rounded"
                    placeholder={0.0}
                    disabled={amountfixed === 1}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Keep my position open */}
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
          {/* Take Profit */}
          <div className="bg-white  dark:text-gray-200 dark:bg-[#2d313d]   px-5 py-2 mx-3 mt-3">
            <div className="list-container flex flex-col gap-2">
              {a.map((i, id) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5"
                      defaultValue="Take Profit 1"
                      onClick={i.onClickfunctopn}
                    />
                    <span className="not-checked-item dark:text-white py-2 text-lg font-bold">
                      {i.title}
                    </span>
                  </div>
                  {i.state && (
                    <div className="flex flex-wrap justify-between">
                      <div>
                        <p className=" text-sm text-[#606266] py-2">
                          Portfolio size
                        </p>
                        <div className="flex ">
                          <div className="flex flex-col">
                            <input
                              type="number"
                              name=""
                              placeholder="0"
                              className="w-full my-2 dark:text-gray-200 outline-none   bg-transparent border-b "
                              defaultValue={0}
                              value={Portfoliotakeprofit1}
                            />
                            <div className="flex gap-2 cursor-pointer">
                              {activePortfolio1.map((i, id) => (
                                <p
                                  className={`border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf] ${
                                    Portfoliotakeprofit1 === i.size
                                      ? "bg-[#e04caf]"
                                      : null
                                  }`}
                                  onClick={() =>
                                    setPortfoliotakeprofit1(i.size)
                                  }
                                >
                                  {i.size}%
                                </p>
                              ))}
                            </div>
                          </div>
                          <span>%</span>
                        </div>
                      </div>
                      <div>
                        <p className=" text-sm text-[#606266] py-2">
                          Take Profit
                        </p>
                        <div className="flex ">
                          <div className="flex flex-col">
                            <input
                              type="number"
                              name=""
                              placeholder="0"
                              className="w-full my-2 dark:text-gray-200 outline-none   bg-transparent border-b "
                              defaultValue={0}
                              value={Portfoliotakeprofit11}
                            />
                            <div className="flex gap-2 cursor-pointer">
                              {activePortfolio11.map((i, id) => (
                                <p
                                  className={`border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf] ${
                                    Portfoliotakeprofit11 === i.size
                                      ? "bg-[#e04caf]"
                                      : null
                                  }`}
                                  onClick={() =>
                                    setPortfoliotakeprofit11(i.size)
                                  }
                                >
                                  {i.size}%
                                </p>
                              ))}
                            </div>
                          </div>
                          <span>%</span>
                        </div>
                        <p className="text-sm mt-3 text-[#606266]">Price</p>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="bg-transparent border-b outline-none"
                          placeholder="0.00000"
                        />
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="flex flex-col gap-2 ">
              <div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-5"
                    onClick={() => setStopLoss(!StopLoss)}
                  />
                  <p className="font-bold">Stop Loss</p>
                </div>
                {StopLoss && (
                  <div className="flex justify-between flex-wrap items-start">
                    <div>
                      <p className=" text-sm text-[#606266] pt-2">Stop Loss</p>
                      <div className="flex ">
                        <div className="flex flex-col">
                          <input
                            type="number"
                            name=""
                            placeholder="0"
                            className="w-full mb-2 dark:text-gray-200 outline-none   bg-transparent border-b "
                            defaultValue={0}
                            value={StopLoss}
                          />
                          <div className="flex gap-2 cursor-pointer">
                            {activePortfolio11.map((i, id) => (
                              <p
                                className={`border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf] ${
                                  setStopLoss === i.size ? "bg-[#e04caf]" : null
                                }`}
                                onClick={() => setStopLoss(i.size)}
                              >
                                {i.size}%
                              </p>
                            ))}
                          </div>
                        </div>
                        <span>%</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm mt-3">Price</p>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="bg-transparent border-b outline-none"
                        placeholder="0.00000"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-5"
                    onClick={() => setmovestoploss(!movestoploss)}
                  />
                  <p className="font-bold">Move Stop Loss to breakeven</p>
                </div>
                {movestoploss && (
                  <div className="flex justify-between flex-wrap items-start">
                    <div>
                      <p className=" text-sm text-[#606266] pt-2">
                        Trigger percentage
                      </p>
                      <div className="flex ">
                        <div className="flex flex-col">
                          <input
                            type="number"
                            name=""
                            placeholder="0"
                            className="w-full mb-2 dark:text-gray-200 outline-none   bg-transparent border-b "
                            defaultValue={0}
                            value={movestoploss}
                          />
                          <div className="flex gap-2 cursor-pointer">
                            {activePortfolio11.map((i, id) => (
                              <p
                                className={`border text-xs rounded-full p-1 border-[#e04caf] hover:bg-[#e04caf] ${
                                  movestoploss === i.size
                                    ? "bg-[#e04caf]"
                                    : null
                                }`}
                                onClick={() => setmovestoploss(i.size)}
                              >
                                {i.size}%
                              </p>
                            ))}
                          </div>
                        </div>
                        <span>%</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm mt-3 text-[#606266] ">
                        Trigger price
                      </p>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="bg-transparent border-b outline-none"
                        placeholder="0.00000"
                      />
                    </div>
                  </div>
                )}
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
    </div>
  );
};

export default Terminal;
