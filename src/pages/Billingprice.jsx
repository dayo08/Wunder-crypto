/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TiTick } from "react-icons/ti";
import { Free, Basic, Pro, Premium } from "../data/dummy";

function Billingprice() {
  const [active, setactive] = useState(1);
  const { currentColor } = useStateContext();

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

  return (
    <div>
      <section className="">
        <div className="p-8 m-3">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pricing
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Pay with a payment card (Visa or MasterCard), PayPal, Crypto
              (10+), Apple Pay and Google Pay.
            </p>
            <div className="flex cursor-pointer justify-center">
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
            <div className="flex flex-col justify-between items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#2c313c] dark:text-white">
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

                      <TiTick className="text-[#03d29b]" />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col justify-between items-center  p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#2c313c] dark:text-white">
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
                  <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                    Downgrade
                  </button>
                  <p className="py-5 text-[#1a97f5]">
                    *Price includes discount based on your current subscription.
                  </p>
                </div>
              </div>

              <ul role="list" className=" space-y-4 text-left">
                {Basic.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      <TiTick className="text-[#03d29b]" />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col justify-between items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#2c313c] dark:text-white">
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
                  <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                    Renew
                  </button>
                </div>
              </div>

              {/* List */}
              <ul role="list" className=" space-y-4 text-left">
                {Pro.map((items) => (
                  <>
                    <li className="flex items-center space-x-3" key={items.id}>
                      {/* Icon */}
                      <TiTick className="text-[#03d29b]" />
                      <span>{items.title}</span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#2c313c] dark:text-white">
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
                  <button className="hover:text-white  hover:bg-[#3c60c3]  text-[#3c60c3]  border-[#3c60c3] border font-bold py-2 px-4 rounded ">
                    Upgrade
                  </button>
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
                      <TiTick className="text-[#03d29b]" />
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
