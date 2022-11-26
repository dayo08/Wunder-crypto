import React, { useEffect, useState } from "react";
import { Button, SparkLine } from "../components";
import { SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import Pagination from "rc-pagination";
import { datatableUsers, datatableUsers1 } from "../data/dummy";
const MarketPlace = () => {
  const [perPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const { currentColor } = useStateContext();
  const [active, setactive] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(datatableUsers.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <Button
          color="white"
          bgColor={currentColor}
          text="Left"
          borderRadius="5px"
        />
      );
    }
    if (type === "next") {
      return (
        <Button
          color="white"
          bgColor={currentColor}
          text="Right"
          borderRadius="5px"
        />
      );
    }
    return originalElement;
  };

  return (
    <>
      <div className=" dark:text-gray-200 dark:bg-[#20252a] bg-white  border-b border-white ">
        <div className="px-6 pt-6 ">
          <div className="md:text-xl text-lg font-bold mb-5">Marketplace</div>
          <div className="flex  text-base font-bold gap-8 cursor-pointer dark:text-white">
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
              Trader's API Accounts
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
              Signal Providers Channels
            </div>
          </div>
        </div>
      </div>
      {active === 1 && (
        <>
          <div className="grid 2xl:grid-cols-6 px-6 pt-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-content-start place-items-start gap-5">
            <div>
              <select className="bg-[#e1e3e9] dark:bg-[#31353e] dark:text-white px-2 py-1 rounded w-56 text-sm">
                <option value="AllTime">All Time</option>
                <option value="LastMonth">Last Month</option>
                <option value="LastWeek"> Last Week</option>
              </select>
            </div>
            <div>
              <select className="bg-[#e1e3e9] dark:bg-[#31353e] px-2 py-1 dark:text-white  rounded w-56 text-sm">
                <option value="AllTime">All Time</option>
                <option value="LastMonth">Last Month</option>
                <option value="LastWeek"> Last Week</option>
              </select>
            </div>
            <div>
              <select className="bg-[#e1e3e9] dark:bg-[#31353e] px-2 py-1 dark:text-white  rounded w-56 text-sm">
                <option value="label.all.exchanges">All exchanges</option>
                <option value="BINANCE">BINANCE-SPOT</option>
                <option value="BINANCE_FUTURES">
                  BINANCE-FUTURES (USDT-M)
                </option>
                <option value="BYBIT">BYBIT</option>
                <option value="BITGET_SWAP">BITGET_SWAP</option>
                <option value="OKEX_FUTURES">OKEX_FUTURES</option>
                <option value="DERIBIT">DERIBIT</option>
                <option value="OKEX_SWAP">OKEX_SWAP</option>
                <option value="OKEX">OKX-SPOT</option>
                <option value="KUCOIN">KUCOIN</option>
                <option value="BINANCE_DELIVERY">
                  BINANCE-FUTURES (COIN-M)
                </option>
              </select>
            </div>
            <div>
              <select className="bg-[#e1e3e9] dark:bg-[#31353e] px-2 py-1 dark:text-white  rounded w-56 text-sm">
                <option value="label.all.base.currencies">
                  All base currencies
                </option>
                <option value="USDT">USDT</option>
                <option value="USD">USD</option>
                <option value="BTC">BTC</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                name=""
                id=""
                placeholder="Min Trades Quantity"
                className="dark:text-gray-200 p-1  border-2 rounded bg-[#e1e3e9] dark:bg-[#31353e] px-2 py-1 dark:text-white   w-56 text-sm"
              />
            </div>
            <div className="flex gap-2 items-center">
              <p className="dark:text-gray-200">Show Followed Only</p>
              <input type="checkbox" name="" id="" />
            </div>
            <button className=" bg-[#598fff] hover:bg-[#3c60c3]  text-black dark:text-white font-bold py-1 px-3 rounded ">
              Filter
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
            {getData(current, size).map((data, index) => (
              <div
                className=" bg-white rounded-lg shadow-md dark:text-gray-200 dark:bg-[#2c313c] dark:border-gray-700 mb-4 mx-10"
                key={data.id}
              >
                <div className="flex justify-between md:px-5 px-2 py-5">
                  <div className="md:font-bold text-sm">
                    <div className="flex gap-2">
                      <img
                        src="https://wundertrading.com/build/images/chart_image_BINANCE-FUTURES%20(USDT-M).png"
                        alt=""
                        className="h-5 w-5 my-auto"
                      />
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{data.money}</div>
                </div>

                <div className="text-center rounded-full w-full h-auto">
                  <p>
                    <img
                      src="https://static.wundertrading.com/trader/627e85c2d1839_traderlogo.jpg"
                      alt="product img"
                      className="p-8 rounded-full mx-auto w-[180px] h-[180px] relative overflow-hidden"
                    />
                  </p>
                  <p className="text-sm">{data.position}</p>
                  <p className="text-xl font-bold">{data.office}</p>
                </div>

                <div className="mx-auto flex items-center justify-center p-3">
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>

                <div className="p-5 text-center">
                  <p className="text-[#828282] text-sm">{data.period}</p>
                  <p className="text-[#02d29a] font-bold text-2xl">
                    {data.salary}
                  </p>
                </div>

                <div className="px-2  py-5">
                  <div className="flex items-center gap-3 justify-between">
                    <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3] border border-[#3c60c3]  font-bold py-2 px-4 rounded ">
                      View Trader
                    </button>
                    <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3] border border-[#3c60c3]  font-bold py-2 px-4 rounded ">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="table-filter-info text-black dar:text-gray-200">
            <Pagination
              className="pagination-data "
              showTotal={(total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total}`
              }
              onChange={PaginationChange}
              total={datatableUsers.length}
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
            />
          </div>
        </>
      )}
      {active === 2 && (
        <>
          <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
            {datatableUsers1.map((data, index) => (
              <div
                className=" bg-white rounded-lg shadow-md dark:text-gray-200 dark:bg-[#2c313c] dark:border-gray-700 mb-4 mx-10"
                key={data.id}
              >
                <div className="flex justify-between md:px-5 px-2 py-5">
                  <div className="md:font-bold text-sm">
                    <div className="flex gap-2">
                      <img
                        src="https://wundertrading.com/build/images/chart_image_BINANCE-FUTURES%20(USDT-M).png"
                        alt=""
                        className="h-5 w-5 my-auto"
                      />
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{data.money}</div>
                </div>

                <div className="text-center rounded-full w-full h-auto">
                  <p>
                    <img
                      src="https://static.wundertrading.com/trader/627e85c2d1839_traderlogo.jpg"
                      alt="product img"
                      className="p-8 rounded-full mx-auto w-[180px] h-[180px] relative overflow-hidden"
                    />
                  </p>
                </div>

                <div className="p-5 text-center">
                  <p className="text-[#828282] text-sm">{data.office}</p>
                  <p className="text-[#02d29a] font-bold text-2xl">
                    {data.period}
                  </p>
                </div>

                <div className="px-5 py-5">
                  <div className="flex items-center justify-between">
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Follow"
                      borderRadius="5px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MarketPlace;
