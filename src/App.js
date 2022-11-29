import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useLocation,
} from "react-router-dom";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar } from "./components";
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
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { loaction } = useLocation();
  const loction = useLocation();
  const { pathname } = loction;
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
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


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="sticky top-0 bg-main-bg dark:bg-[#282c34] navbar w-full ">
        {pathname === "/signIn" || pathname === "/signUp" ? null : <Navbar />}
      </div>

      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className={`text-3xl text-white p-3 z-50 bg-blue-500 fixed bottom-3 left-4 flex items-center rounded-full hover:drop-shadow-xl ${
            activeMenu ? "hidden" : "block"
          }`}
        >
          <AiOutlineMenu onClick={handleActiveMenu} />
        </div>
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            className="text-3xl text-white p-3 bg-blue-500  flex items-center rounded-full hover:drop-shadow-xl "
          >
            <BsFillChatLeftTextFill className="" />
          </button>
        </div>
        {pathname === "/signIn" ||
        pathname === "/signUp" ? null : activeMenu ? (
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
              ? `dark:bg-[#282c34]  bg-[#f5f6fa] min-h-screen ${
                  pathname === "/signIn" || pathname === "/signUp"
                    ? null
                    : "md:ml-[220px]"
                } w-full  `
              : "bg-[#f5f6fa] dark:bg-[#282c34]  w-full min-h-screen flex-2 "
          }
        >
          <div className="mb-20">
            {pathname === "/signIn" || pathname === "/signUp" ? null : (
              <section className="user-subs-inf-banner text-center">
                Current plan: Pro ( 3 days left )
              </section>
            )}
            {/* {themeSettings && <ThemeSettings />} */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/MyExchanges" element={<MyExchanges />} />
              <Route path="/Positions" element={<Positions />} />
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
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
