import React from "react";
import binance from "../data/binance.webp";
import bitmex from "../data/bitmex.webp";
function Createtraderaccount() {
  return (
    <div>
      <div>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create trader account
                </h1>
                <form className="space-y-4 md:space-y-6" autoComplete="off">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Exchange
                    </label>
                    <select class="px-3 py-2 w-full text-black rounded ">
                      <option value="0" data-code="BINANCE">
                        BINANCE-SPOT
                      </option>
                      <option value="1" data-code="BINANCE_DELIVERY">
                        BINANCE-FUTURES (COIN-M)
                      </option>
                      <option value="2" data-code="BINANCE_FUTURES">
                        BINANCE-FUTURES (USDT-M)
                      </option>
                      <option value="3" data-code="BITFINEX">
                        BITFINEX-SPOT
                      </option>
                      <option value="4" data-code="BITGET">
                        BITGET-SPOT
                      </option>
                      <option value="5" data-code="BITGET_SWAP">
                        BITGET-SWAP (USDT-M)
                      </option>
                      <option value="6" data-code="BITGET_SWAP_INVERSE">
                        BITGET-SWAP (COIN-M)
                      </option>
                      <option value="7" data-code="BITMEX">
                        BITMEX
                      </option>
                      <option value="8" data-code="BYBIT">
                        BYBIT
                      </option>
                      <option value="9" data-code="COINBASEPRO">
                        COINBASE-PRO
                      </option>
                      <option value="10" data-code="DERIBIT">
                        DERIBIT
                      </option>
                      <option value="11" data-code="HUOBI">
                        HUOBI-SPOT
                      </option>
                      <option value="12" data-code="HUOBI_SWAP">
                        HUOBI Coin Perpetual
                      </option>
                      <option value="13" data-code="KRAKEN">
                        KRAKEN
                      </option>
                      <option value="14" data-code="KUCOIN">
                        KUCOIN
                      </option>
                      <option value="15" data-code="OKEX">
                        OKEX-SPOT
                      </option>
                      <option value="16" data-code="OKEX_FUTURES">
                        OKEX-FUTURES
                      </option>
                      <option value="17" data-code="OKEX_SWAP">
                        OKEX-SWAP
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="Name of the account"
                      className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Name of the account
                    </label>
                    <input
                      type="text"
                      name="Name of the account"
                      id="Name of the account "
                      className=" border-b dark:border-gray-300 outline-none border-black  bg-transparent text-gray-900 sm:text-sm block w-full p-2.5    dark:text-white "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="API"
                      className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                    >
                      API
                    </label>
                    <input
                      type="text"
                      name="API"
                      id="API "
                      className=" border-b dark:border-gray-300 outline-none border-black  bg-transparent text-gray-900 sm:text-sm block w-full p-2.5    dark:text-white "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Secret"
                      className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Secret
                    </label>
                    <input
                      type="text"
                      name="Secret"
                      id="Secret "
                      className=" border-b dark:border-gray-300 outline-none border-black  bg-transparent text-gray-900 sm:text-sm block w-full p-2.5    dark:text-white "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Favorite"
                      className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Favorite
                    </label>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer outline-none "
                        defaultValue=""
                      />
                      <div className="w-11 h-6 bg-gray-200 outline-none rounded-full peer peer-focus:ring-4   dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#adb4bc] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                  </div>
                  <button class="bg-[#02d29a] text-white px-2 py-1 rounded-sm">
                    Add
                  </button>
                </form>
                <p className="block mb-2 text-base font-bold text-gray-900 dark:text-white">
                  Don't have an exchange account? Sign up now
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-5 mt-2 items-start">
              <div className="w-32 flex justify-start items-start dark:text-gray-200 dark:bg-[#323640] bg-white rounded-xl">
                <img src={binance} alt="" />
              </div>
              <div className="w-32 flex justify-start items-start dark:text-gray-200 dark:bg-[#323640] bg-white rounded-xl">
                <img src={bitmex} alt="" className="w-40" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Createtraderaccount;
