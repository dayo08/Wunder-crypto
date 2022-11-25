import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Dashboard,
  SignIn,
  SignUp,
  Billing,
  MyExchanges,
  Referrals,
  Settings,
  ManageCopyTrading,
  Positions,
  MarketPlace,
  Terminal,
  Createtraderaccount,
} from "./pages";
import "./App.css";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    setActiveMenu,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

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

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="sticky top-0 bg-main-bg dark:bg-[#282c34] navbar w-full ">
          <Navbar />
        </div>

        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className={`fixed bg-black rounded-full p-2 bottom-4 z-50 left-4 ${
              activeMenu ? "hidden" : "block"
            }`}
          >
            <NavButton
              title="Menu"
              customFunc={handleActiveMenu}
              color={currentColor}
              icon={<AiOutlineMenu />}
            />
          </div>
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-[220px] fixed sidebar dark:bg-[#20242b] bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-[#20242b]">
              <Sidebar />
            </div>
          )}

          <div
            className={
              activeMenu
                ? "dark:bg-[#282c34]  bg-[#f5f6fa] min-h-screen md:ml-[220px] w-full  "
                : "bg-[#f5f6fa] dark:bg-[#282c34]  w-full min-h-screen flex-2 "
            }
          >
            <div>
              <section className="user-subs-inf-banner text-center">
                Current plan: Pro ( 3 days left )
              </section>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/MyExchanges" element={<MyExchanges />} />
                <Route path="/Positions" element={<Positions />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/Billing" element={<Billing />} />
                <Route path="/Referrals" element={<Referrals />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/Marketplace" element={<MarketPlace />} />
                <Route path="/Terminal" element={<Terminal />} />
                <Route
                  path="/Createtraderaccount"
                  element={<Createtraderaccount />}
                />
                <Route
                  path="/ManageCopyTrading"
                  element={<ManageCopyTrading />}
                />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
