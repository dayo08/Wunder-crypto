import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TiTick } from "react-icons/ti";
import { useStateContext } from "../contexts/ContextProvider";
import { Trading, General, Traders, Other, Copy } from "../data/dummy";

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
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto overflow-x-auto">
          <p className="p-2 text-xl font-bold">Pricing plan comparison</p>
          <div className="table-wrapper mt-10">
            <table className="fl-table">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">Free</h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">Basic</h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">Pro</h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">Premium</h2>
                  </th>
                </tr>
              </thead>
              <p className="text-start text-2xl font-bold mt-5">
                General features
              </p>
              <tbody className="space-y- text-left divide-y divide-gray-700">
                {General.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left w-10">
                        <h3 className="py-3 ">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">100</span>
                      </td>
                      <td>
                        <span className="block text-sm">100</span>
                      </td>
                      <td>
                        <span className="block text-sm">10</span>
                      </td>
                      <td>
                        <span className="block text-sm">10</span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>

              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">
                  Trading terminal
                </p>
                {Trading.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">
                  Traders / Signal Providers
                </p>
                {Traders.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">
                  Copy-Traders
                </p>
                {Copy.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">
                  Other features
                </p>
                {Other.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">
                  Other features
                </p>
                {Other.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tbody className="space-y-6 text-left divide-y divide-gray-700">
                <p className="text-start text-2xl font-bold mt-5">Support</p>
                {Support.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left">
                        <h3 className="py-3">{items.title}</h3>
                      </th>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="block text-sm">
                          <NavButton
                            title="Cart"
                            color={currentColor}
                            icon={<TiTick />}
                          />
                        </span>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Billingcomaper;
