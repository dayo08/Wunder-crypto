import React from "react";
import { FiTerminal, FiSettings } from "react-icons/fi";

import { GiPositionMarker } from "react-icons/gi";

import {
  FaExchangeAlt,
  FaLandmark,
  FaBullhorn,
  FaWallet,
  FaBookOpen,
  FaChartBar,
  FaRoute,
} from "react-icons/fa";

import { AiFillDashboard } from "react-icons/ai";

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

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

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Germany",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "England",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "India",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const ecomPieChartData = [
  { x: "2018", y: 18, text: "35%" },
  { x: "2019", y: 18, text: "15%" },
  { x: "2020", y: 18, text: "25%" },
  { x: "2021", y: 18, text: "25%" },
];
