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
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

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
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div className="md:ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link
                to="/"
                onClick={handleCloseSideBar}
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware /> <span>Wunder</span>
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: currentColor }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10 ">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`${link.path}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
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
            <div className="mt-10 ">
              {social.map((item) => (
                <div>
                  {item.links.map((link) => (
                    <a
                      href={`${link.link}`}
                      target="_blank"
                      key={link.name}
                      onClick={handleCloseSideBar}
                      className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mt-10 flex gap-3 items-center justify-between mr-3 ">
          {socialmedai.map((items, index) => (
            <>
              <a href={items.link} className="text-3xl">
                <NavButton
                  title="Cart"
                  color={currentColor}
                  icon={items.icon}
                />
              </a>
            </>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2  mt-2 mr-3 hover:bg-[#598fff] border-[#3c60c3] border  text-black dark:text-white font-bold py-2 px-4 rounded  btn">
          <FcOnlineSupport className="text-3xl" />
          <button>Support</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
