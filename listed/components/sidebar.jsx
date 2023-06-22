"use client";

import { SetupState } from "@/context/context";
import React from "react";
import DashBoardIcon from "../public/dashboard_icon.svg";
import Image from "next/image";

const sidebar = () => {
  // const sidebarOptions = ['Dashboard', 'Transactions', 'Schedules', 'Users', 'Settings'];
  const { activeFilter, setActiveFilter, sidebarOptions } = SetupState();

  console.log(activeFilter);

  return (
    <div className=" bg-gray-950 flex items-start justify-start flex-col pl-4 pr-4 lg:pl-7 lg:pr-14 py-8 rounded-xl  absolute top-8 bottom-6">
      <h2 className="text-slate-100 text-lg hidden lg:flex font-bold mb-10 ">
        Board.
      </h2>
      <h2 className="text-slate-100 text-lg flex lg:hidden font-bold mb-10 ">
        B.
      </h2>

      <div className="flex items-start justify-start flex-col gap-4 mb-12">
        {sidebarOptions.map((item) => (
          <span
            onClick={() => {
              setActiveFilter(item.name);
            }}
            className="flex cursor-pointer items-center justify-start gap-2"
          >
            <Image src={item.icon} alt={item.name} />
            <p
              className={`${
                activeFilter === item.name
                  ? "text-slate-100 font-semibold "
                  : "text-slate-400"
              } text-sm  hidden lg:flex `}
              key={item.name}
            >
              {item.name}{" "}
            </p>
          </span>
        ))}
        {/* <span>
          <Image

          />
        <p
            onClick={() => {
              setActiveFilter("Dashboard");
            }}
            className={`${
              activeFilter === "Dashboard"
                ? "text-slate-100 font-semibold "
                : "text-slate-400"
            } text-sm cursor-pointer `}
          >
            Dashboard
          </p>
        </span> */}
      </div>

      <span className="h-full hidden text-slate-400 text-xs lg:flex items-start justify-end flex-col gap-2 grow ">
        <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </span>
    </div>
  );
};

export default sidebar;
