import React from "react";
import { FiTerminal, FiSettings, FiFacebook } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";
import {
  FaExchangeAlt,
  FaLandmark,
  FaBullhorn,
  FaWallet,
  FaBookOpen,
  FaChartBar,
  FaRoute,
  FaTelegram,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
export const links = [
  {
    links: [
      {
        name: "Dashboard",
        icon: <AiFillDashboard />,
        path: "/",
      },
    ],
  },

  {
    links: [
      {
        name: "My Exchanges",
        icon: <FaExchangeAlt />,
        path: "/MyExchanges",
      },
      {
        name: "Positions",
        icon: <GiPositionMarker />,
        path: "/Positions",
      },
      {
        name: "Terminal",
        icon: <FiTerminal />,
        path: "/Terminal",
      },
    ],
  },
  {
    links: [
      {
        name: "Marketplace",
        icon: <FaLandmark />,
        path: "/Marketplace",
      },
      {
        name: "Manage Copy-Trading",
        icon: <FaLandmark />,
        path: "/ManageCopyTrading",
      },
      {
        name: "Referrals",
        icon: <FaBullhorn />,
        path: "/Referrals",
      },
      {
        name: "Billing",
        icon: <FaWallet />,
        path: "/Billing",
      },
      {
        name: "Settings",
        icon: <FiSettings />,
        path: "/Settings",
      },
    ],
  },
];

export const social = [
  {
    links: [
      {
        link: "https://wundertrading.com/",
        name: "Help Center",
        icon: <FaBookOpen />,
      },
      {
        link: "https://wundertrading.com/",
        name: "Bitcoin analytics",
        icon: <FaChartBar />,
      },
      {
        link: "https://wundertrading.com/",
        name: "Roadmap",
        icon: <FaRoute />,
      },
    ],
  },
];

export const socialmedai = [
  {
    link: "https://wundertrading.com/",
    icon: <FiFacebook className="text-3xl"/>,
  },
  {
    link: "https://wundertrading.com/",
    icon: <AiOutlineTwitter className="text-3xl"/>,
  },
  {
    link: "https://wundertrading.com/",
    icon: <AiFillYoutube className="text-3xl"/>,
  },
  {
    link: "https://wundertrading.com/",
    icon: <FaTelegram className="text-3xl"/>,
  },
  {
    link: "https://wundertrading.com/",
    icon: <SiDiscord className="text-3xl"/>,
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const ecomPieChartData = [
  { x: "2018", y: 18, text: "35%" },
  { x: "2019", y: 18, text: "15%" },
  { x: "2020", y: 18, text: "25%" },
  { x: "2021", y: 18, text: "25%" },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const datatableUsers = [
  {
    name: " BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%49491.60",
    id: 1,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%17269.83",
    id: 2,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%26878.49",
    id: 3,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%40424.12",
    id: 4,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%43236.35",
    id: 5,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%47377.66",
    id: 6,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%8542.68",
    id: 7,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%13361.55",
    id: 8,
  },
  {
    name: "  BINANCE-FUTURES (USDT-M)  One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%35778.22",
    id: 9,
  },
  {
    name: "  BINANCE-FUTURES (USDT-M)  One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%42515.25",
    id: 10,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%51025.31",
    id: 11,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%39220.72",
    id: 12,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%4794.31",
    id: 13,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%42963.14",
    id: 14,
  },
  {
    name: "BINANCE-FUTURES (USDT-M) One-Way Mode",
    position: "binance_v6_leverage",
    money: "$ 69 / mo",
    office: "tolga simitçioğlu",
    period: "Period P/L",
    salary: "%13845.40",
    id: 15,
  },
];
export const datatableUsers1 = [
  {
    name: " BINANCE-FUTURES (USDT-M)",
    money: "$ 69 / mo",
    office: "WBT",
    period: "AI Crypto",
    id: 1,
  },
  {
    name: "BINANCE-FUTURES (USDT-M)",
    money: "$ 69 / mo",
    office: "WBT",
    period: "AI Crypto",
    id: 2,
  },
];

export const Trading = [
  { id: 0, title: "Classic trading terminal " },
  { id: 1, title: "Spot Trading" },
  { id: 2, title: "Futures Trading" },
  { id: 3, title: "Take Profit / Stop Loss" },
  { id: 4, title: "Market entry (for limit order when unfilled)" },
  { id: 5, title: "Market close" },
  { id: 6, title: "Trailing Stop" },
  { id: 7, title: "Multiple take profits" },
  { id: 8, title: "Fixed Amount" },
  { id: 9, title: "Futures Spreads & Arbitrage" },
  { id: 10, title: "Swing trade" },
  { id: 11, title: "DCA trading terminal" },
];
export const General = [
  { id: 1, title: "Number of Open Positions" },
  { id: 2, title: "Number of Active Signal Channels" },
  { id: 3, title: "Number of API Profiles per exchange" },
];
export const Traders = [
  { id: 1, title: "Show in marketplace" },
  { id: 2, title: "Allow copy-trading" },
  { id: 3, title: "Set price for copy-traders" },
];

export const Copy = [
  { id: 0, title: "Follow Trader accounts" },
  { id: 1, title: "Copy Entry and Exit Signals" },
  { id: 2, title: "Unlimited API per exchange" },
  { id: 3, title: "Edit open strategies" },
];
export const Other = [
  { id: 0, title: "Publicly available trader's profile page" },
  { id: 1, title: "Email notifications" },
];

export const Free = [
  { id: 0, title: "5 open positions" },
  { id: 1, title: "1 API per exchange" },
  { id: 2, title: "Trading Terminal (Spot Trading, Futures Trading)" },
  { id: 3, title: "Spot Trading" },
  { id: 4, title: "Futures Trading" },
  { id: 5, title: "Simultaneous Take Profit and Stop Loss" },
  { id: 6, title: "2 active signal channels" },
];
export const Basic = [
  { id: 1, title: "15 open positions" },
  { id: 2, title: "2 API per exchange" },
  { id: 3, title: "Trailing stop" },
  { id: 4, title: "Multiple take profits" },
  { id: 5, title: "DCA trading terminal" },
  { id: 6, title: "5 active signal channels" },
];
export const Pro = [
  { id: 0, title: "100 open positions" },
  { id: 1, title: "15 active bots" },
  { id: 2, title: "5 API per exchange" },
  { id: 3, title: "Fixed amount" },
  { id: 4, title: "Spread trading terminal" },
  { id: 5, title: "Swing trade" },
  { id: 6, title: "15 active signal channels" },
];
export const Premium = [
  { id: 0, title: "1000 open positions" },
  { id: 1, title: "Unlimited active bots" },
  { id: 2, title: "Unlimited API per exchange" },
  { id: 3, title: "Unlimited signal channels" },
];

export const columnArray = [
  { id: 1, title: "Position" },
  { id: 2, title: "Entry" },
  { id: 3, title: "Take Profit" },
  { id: 4, title: "Stop Loss" },
  { id: 5, title: "Trailing Stop ┊ Activation Price" },
  { id: 6, title: "Portfolio" },
  { id: 7, title: "P/L" },
  { id: 8, title: "ROI" },
  { id: 9, title: "R/R" },
  { id: 10, title: "Status" },
  { id: 11, title: "Last update" },
  { id: 12, title: "Actions" },
];

export const Generaldata = [
  { id: 1, title: "Position entry" },
  { id: 2, title: "Position exit" },
  { id: 3, title: "Error notifications" },
];
