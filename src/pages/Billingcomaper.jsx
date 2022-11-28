import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TiTick } from "react-icons/ti";
import { useStateContext } from "../contexts/ContextProvider";
import { Trading, General, Traders, Other, Copy } from "../data/dummy";
import "./tablecssforbilling.css";

function Billingcomaper() {
  const { currentColor } = useStateContext();
  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="Bottomtext-left">
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

  const Support = [{ id: 0, title: "Support" }];
  return (
    <div>
      <section className="dark: dark:text-gray-100">
        <p className="px-12 text-xl font-bold">Pricing plan comparison</p>
        <div className="container mx-auto overflow-x-hidden ">
          <div className="mt-10">
            <div className="sticky bottom-0">
              <div className="pl-6 PB-2 flex w-full   sm:items-center items-start sm:flex-row flex-col ">
                <>
                  <div className="text-start text-base font-light w-96 "></div>

                  <div className="flex font-bold text-xl justify-around w-full items-center">
                    <div>
                      <span>Free</span>
                    </div>
                    <div>
                      <span>Basic</span>
                    </div>
                    <div>
                      <span>Pro</span>
                    </div>
                    <div>
                      <span>Premium</span>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                General features
              </p>
              {General.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">100</span>
                      </div>
                      <div>
                        <span className="block text-sm">100</span>
                      </div>
                      <div>
                        <span className="block text-sm">100</span>
                      </div>
                      <div>
                        <span className="block text-sm">100</span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>

            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                Trading terminal
              </p>
              {Trading.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>
            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                Traders / Signal Providers
              </p>
              {Traders.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>

            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                Copy-Traders
              </p>
              {Copy.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>
            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                Other features
              </p>
              {Other.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>
            <div>
              <p className="text-start text-2xl font-bold my-5 md:mx-8 mx-5">
                Support
              </p>
              {Support.map((items) => (
                <div className="pl-6 pb-2 flex w-full  bg-white  dark:bg-[#2c313c] sm:items-center items-start sm:flex-row flex-col ">
                  <>
                    <div className="text-start text-base font-light w-96 ">
                      <h3 className="py-3 px-3">{items.title}</h3>
                    </div>

                    <div className="flex justify-around w-full items-center">
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          <TiTick className="text-[#03d29b] text-xl mx-auto" />
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <></>
    </div>
  );
}

export default Billingcomaper;
