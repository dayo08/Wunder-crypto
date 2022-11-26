import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { SiShopware } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiSun } from "react-icons/gi";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    setScreenSize,
    screenSize,
    setColor,
    setMode,
    currentMode,
    setThemeSettings,
  } = useStateContext();

  console.log(currentMode);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1023) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1023) {
      setActiveMenu(false);
    }
  };

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className=" border-b border-gray-500">
      <div className="flex justify-between p-2 md:ml-1 md:mr-6 relative">
        <Link
          to="/"
          onClick={handleCloseSideBar}
          className="items-center gap-3  flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
        >
          <SiShopware /> <span>Wunder</span>
        </Link>

        <div className="flex items-center gap-5">
          {/* <NavButton
            title="Cart"
            color={currentColor}
            icon={<AiOutlineUser />}
          /> */}
          {currentMode === "Dark" ? (
            <>
              <GiSun className=" cursor-pointer fill-white" />
            </>
          ) : (
            <>
              <FiMoon className="fill-black cursor-pointer" />
            </>
          )}
          <input
            type="radio"
            id="dark"
            name="theme"
            value="Dark"
            onChange={setMode}
            className="cursor-pointer"
            checked={currentMode === "Dark"}
          />
          <input
            type="radio"
            id="light"
            name="theme"
            value="Light"
            className="cursor-pointer"
            onChange={setMode}
            checked={currentMode === "Light"}
          />
          <FaUser className="cursor-pointer hover:fill-[#0143cc] dark:fill-white" />

          <div
            className="flex items-center gap-2 cursor-pointer p-1 "
            onClick={() => handleClick("userProfile")}
          >
            <p>
              <span className="text-black font-normal hover:text-[#0143cc] dark:text-white dark:hover:text-[#598fff] ml-1 text-14">
                Sign out
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
