import React from "react";

const MarketPlace = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];

  return (
    <>
      <div className="px-2 grid grid-cols-3 gap-4">
        {data?.map((item) => (
          <div className=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4 mx-10">
            <div className="flex justify-between px-5 py-5">
              <div className="font-bold text-sm">
                <div className="flex gap-2">
                  <img
                    src="https://wundertrading.com/build/images/chart_image_BINANCE-FUTURES%20(USDT-M).png"
                    alt=""
                    className="h-5 w-5 my-auto"
                  />
                  <p>
                    BINANCE-FUTURES (USDT-M) <br /> One-Way Mode
                  </p>
                </div>
              </div>
              <div className="text-sm font-semibold">$ 69 / mo</div>
            </div>

            <div className="text-center rounded-full w-full h-auto">
              <p>
                <img
                  src="https://static.wundertrading.com/trader/627e85c2d1839_traderlogo.jpg"
                  alt="product img"
                  className="p-8 rounded-full mx-auto w-[180px] h-[180px] relative overflow-hidden"
                />
              </p>
              <p className="text-sm">binance_v6_leverage</p>
              <p className="text-xl font-bold">tolga simitçioğlu</p>
            </div>

            <div className="p-5">{/* Put your chart here */}</div>

            <div className="p-5 text-center">
              <p className="text-[#828282] text-sm">Period P/L</p>
              <p className="text-[#02d29a] font-bold text-2xl">2637.76%</p>
            </div>

            <div className="px-5 py-5">

              <div className="flex items-center justify-between">
                <button className="text-white bg-[#03C9D7]  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  View Trader
                </button>
                <button className="text-white bg-[#03C9D7]  font-medium rounded-lg text-sm px-5 py-2.5 text-center 800">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketPlace;
