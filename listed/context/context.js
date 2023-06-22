"use client";

import React, { createContext, useContext, useState } from "react";
import dashboardIcon from "../public/dashboard_icon.svg";
import transactionIcon from "../public/transaction_icon.svg";
import scheduleIcon from "../public/schedule_icon.svg";
import settingIcon from "../public/setting_icon.svg";
import userIcon from "../public/user_icon.svg";

const Store = createContext(null);

const context = ({ children }) => {
  const sidebarOptions = [
    {name:"Dashboard", icon: dashboardIcon},
    {name: "Transactions", icon: transactionIcon},
    {name:"Schedules", icon: scheduleIcon},
    {name:"Users", icon: userIcon},
    {name:"Settings", icon: settingIcon},
  ];
  const [homeSetups, setHomeSetups] = useState([]);
  const [singleSetup, setSingleSetup] = useState({});
  const [toggleShowAll, setToggleShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Dashboard");
  const [navbarState, setNavbarState] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Store.Provider
      value={{
        homeSetups,
        setHomeSetups,
        toggleShowAll,
        setToggleShowAll,
        singleSetup,
        setSingleSetup,
        activeFilter,
        setActiveFilter,
        navbarState,
        setNavbarState,
        formData,
        setFormData,
        sidebarOptions
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default context;

export const SetupState = () => {
  return useContext(Store);
};
