/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TiTick } from "react-icons/ti";
function Billingprice() {
  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className=" text-xl rounded-full hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
  const [active, setactive] = useState(1);
  const { currentColor } = useStateContext();
  const Free = [
    { id: 0, title: "5 open positions" },
    { id: 1, title: "1 API per exchange" },
    { id: 2, title: "Trading Terminal (Spot Trading, Futures Trading)" },
    { id: 3, title: "Spot Trading" },
    { id: 4, title: "Futures Trading" },
    { id: 5, title: "Simultaneous Take Profit and Stop Loss" },
    { id: 6, title: "2 active signal channels" },
  ];
  const Basic = [
    { id: 1, title: "15 open positions" },
    { id: 2, title: "2 API per exchange" },
    { id: 3, title: "Trailing stop" },
    { id: 4, title: "Multiple take profits" },
    { id: 5, title: "DCA trading terminal" },
    { id: 6, title: "5 active signal channels" },
  ];
  const Pro = [
    { id: 0, title: "100 open positions" },
    { id: 1, title: "15 active bots" },
    { id: 2, title: "5 API per exchange" },
    { id: 3, title: "Fixed amount" },
    { id: 4, title: "Spread trading terminal" },
    { id: 5, title: "Swing trade" },
    { id: 6, title: "15 active signal channels" },
  ];
  const Premium = [
    { id: 0, title: "1000 open positions" },
    { id: 1, title: "Unlimited active bots" },
    { id: 2, title: "Unlimited API per exchange" },
    { id: 3, title: "Unlimited signal channels" },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-800">
        <div className="p-8 m-3">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pricing
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Pay with a payment card (Visa or MasterCard), PayPal, Crypto
              (10+), Apple Pay and Google Pay.
            </p>
            <div className="flex justify-center">
              <p
                className={`p-3 border border-[#598efe] ${
                  active === 1 ? "bg-[#598efe]" : null
                }`}
                onClick={() => {
                  setactive(1);
                }}
              >
                1 MOnth
              </p>
              <p
                className={`p-3 border border-[#598efe] ${
                  active === 2 ? "bg-[#598efe]" : null
                }`}
                onClick={() => {
                  setactive(2);
                }}
              >
                12 Months
              </p>
            </div>
          </div>
          <div className="space-y-8 lg:grid 2xl:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col justify-between items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Free</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Explore crypto trading automation for free.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 lg:text-5xl md:text-2xl text-lg font-extrabold">
                    $0.00
                  </span>
                </div>
              </div>
              {/* List */}
              <ul role="list" className=" space-y-4 text-left">
                {Free.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      {/* Icon */}
                      <NavButton
                        title="Cart"
                        color={currentColor}
                        icon={<TiTick />}
                      />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col justify-between items-center  p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Automate your trading and investment for passive income.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  {active === 1 ? (
                    <>
                      <span className="mr-2 lg:text-5xl font-extrabold">
                        $8.29*
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-[red] line-through">$9.95</p>
                        <span className="mr-2 lg:text-5xl font-extrabold">
                          $ 7.82*
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          /Year
                        </span>
                        <p className="text-2xl font-bold mt-2">You save 20%</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="pb-3 ">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Downgrade"
                    borderRadius="2px"
                  />
                  <p className="py-5 text-[#1a97f5]">
                    *Price includes discount based on your current subscription.
                  </p>
                </div>
              </div>

              <ul role="list" className=" space-y-4 text-left">
                {Basic.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      {/* Icon */}
                      <NavButton
                        title="Cart"
                        color={currentColor}
                        icon={<TiTick />}
                      />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col justify-between items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  For full time traders to combine manual, automatic and
                  copy-trading.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  {active === 1 ? (
                    <>
                      <span className="mr-2 lg:text-5xl font-extrabold">
                        $8.29*
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-[red] line-through">$9.95</p>
                        <span className="mr-2 lg:text-5xl font-extrabold">
                          $ 7.82*
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          /Year
                        </span>
                        <p className="text-2xl font-bold mt-2">You save 20%</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="pb-3 ">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Renew"
                    borderRadius="2px"
                  />
                </div>
              </div>

              {/* List */}
              <ul role="list" className=" space-y-4 text-left">
                {Pro.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      {/* Icon */}
                      <NavButton
                        title="Cart"
                        color={currentColor}
                        icon={<TiTick />}
                      />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Unlimited features for traders and their followers.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  {active === 1 ? (
                    <>
                      <span className="mr-2 lg:text-5xl font-extrabold">
                        $8.29*
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-[red] line-through">$9.95</p>
                        <span className="mr-2 lg:text-5xl font-extrabold">
                          $ 7.82*
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          /Year
                        </span>
                        <p className="text-2xl font-bold mt-2">You save 20%</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="pb-3 ">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Upgrade"
                    borderRadius="2px"
                  />
                  <p className="py-5 text-[#1a97f5]">
                    *Price includes discount based on your current subscription.
                  </p>
                </div>
              </div>

              {/* List */}
              <ul role="list" className=" space-y-4 text-left">
                {Premium.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      {/* Icon */}
                      <NavButton
                        title="Cart"
                        color={currentColor}
                        icon={<TiTick />}
                      />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Billingprice;
