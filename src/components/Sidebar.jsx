/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links, social, socialmedai } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1023) {
      setActiveMenu(false);
    }
  };


  const activeLink =
    "flex items-center gap-2 pl-3 pt-3 pb-2.5 bg-[#f5f6fa] dark:bg-[#31353e] text-[#598fff]  text-md ";
  const normalLink =
    "flex items-center gap-2 pl-3 pt-3 pb-2.5  text-md text-gray-700 dark:text-gray-200 dark:hover:text-[#598fff] dark:hover:bg-[#31353e] hover:bg-[#f5f6fa]   ";

  return (
    <>
      <div className="border-r border-gray-500 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: currentColor }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block lg:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="">
              {links.map((item) => (
                <div key={item.title}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`${link.path}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="border-b bor mt-28">
          <div className="mt-10 ">
            {social.map((item) => (
              <div>
                {item.links.map((link) => (
                  <a
                    href={`${link.link}`}
                    target="_blank"
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className="flex items-center gap-2 pl-3 pt-3 pb-2.5  text-md text-gray-700 dark:text-gray-200 dark:hover:text-[#598fff] dark:hover:bg-[#31353e] hover:bg-[#f5f6fa] "
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3 items-center justify-between mr-3 ">
            {socialmedai.map((items, index) => (
              <>
                <a href={items.link} className="text-3xl">
                  <div className="dark:text-white text-black hover:text-[#598fff]">
                    {items.icon}
                  </div>
                </a>
              </>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2  mt-4 mr-3 hover:bg-[#598fff] border-[#3c60c3] border  text-black dark:text-white font-bold py-2 px-4 rounded  btn">
            <FcOnlineSupport className="text-3xl" />
            <button>Support</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
