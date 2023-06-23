import Image from "next/image";
import React from "react";
import bellIcon from "../public/Vector.svg";
import LineChart from "../components/linechart";
import PiChart from "../components/pichart";
import { totalData } from "@/utils/data";
import totalRevenue from "../public/Vector (1).svg";
import totalLike from "../public/Vector (2).svg";
import totalUser from "../public/Vector (3).svg";
import totalTransaction from "../public/transaction_icon.svg";

const dashboard = ({ session }) => {
  const list = [1, 2, 3, 4];

  return (
    <div className="p-3 flex items-center justify-center flex-col gap-4 ">
      <nav className="w-full flex items-center justify-between flex-col lg:flex-row ">
        <h3 className="text-xl font-bold text-gray-900  ">Dashboard</h3>
        <div className="flex items-center justify-center gap-4">
          <input
            placeholder="Search..."
            id="search"
            name="search"
            type="text"
            className=" outline-none text-xs rounded-md bg-white text-gray-800 px-3 py-1 text-left w-full mt-1"
          />
          <Image src={bellIcon} alt="Bell Icon" />
          <img
            className="w-6 h-6 rounded-full "
            src={session?.user?.image}
            alt={session?.user?.name}
          />
        </div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full">
        <div className="bg-green-300 second:bg-orange-300 h-24 w-full rounded-xl p-4 ">
          <Image
            src={totalRevenue}
            alt="TotalRevenue"
            className=" mb-2 text-end float-right "
          />
          <p className="text-xs text-slate-700 font-semibold pt-6">
            Total Revenue
          </p>
          <p className="text-sm text-slate-700 font-bold">
            ${totalData.revenue}
          </p>
        </div>
        <div className="bg-orange-300 second:bg-orange-300 h-24 w-full rounded-xl p-4 ">
          <Image
            src={totalTransaction}
            alt="TotalRevenue"
            className=" mb-2 text-end float-right "
          />
          <p className="text-xs text-slate-700 font-semibold pt-6">
            Total Transactions
          </p>
          <p className="text-sm text-slate-700 font-bold">
            {totalData.transactions}
          </p>
        </div>
        <div className="bg-red-300 second:bg-orange-300 h-24 w-full rounded-xl p-4 ">
          <Image
            src={totalLike}
            alt="TotalRevenue"
            className=" mb-2 text-end float-right "
          />
          <p className="text-xs text-slate-700 font-semibold pt-6">
            Total Likes
          </p>
          <p className="text-sm text-slate-700 font-bold">{totalData.likes}</p>
        </div>
        <div className="bg-purple-300 second:bg-orange-300 h-24 w-full rounded-xl p-4 ">
          <Image
            src={totalUser}
            alt="TotalRevenue"
            className=" mb-2 text-end float-right "
          />
          <p className="text-xs text-slate-700 font-semibold pt-6">
            Total Users
          </p>
          <p className="text-sm text-slate-700 font-bold">{totalData.user}</p>
        </div>
      </div>

      <div className=" flex items-center justify-center bg-white rounded-xl w-full flex-col gap-2 p-6 ">
        <span className="w-full">
          <h4 className="text-base font-bold text-gray-900  ">Activities</h4>
        </span>
        <LineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="bg-white h-full w-full rounded-xl p-6 flex items-center justify-center flex-col ">
          <h4 className="text-base font-bold text-gray-900 pb-2 w-full text-left ">
            Top Products
          </h4>
          <PiChart />
        </div>
        <div className="bg-white w-full rounded-xl p-6 flex items-start justify-start flex-col gap-2 ">
          <h4 className="text-base font-bold text-gray-900 w-full text-left ">
            Today's schedule
          </h4>
          <span className="border-l-4 border-green-500 py-2 flex items-start justify-center flex-col gap-1">
            <p className="text-sm pl-2 font-medium text-slate-600" >Meeting with suppliers from Kuta, Bali</p>
            <p className="text-xs pl-2 font-medium text-slate-400">14.00-15.00</p>
            <p className="text-xs pl-2 font-medium text-slate-400">At Sunset Eoad, Kuta, Bali</p>
          </span>
          <span className="border-l-4 border-blue-500 py-2 flex items-start justify-center flex-col gap-1">
            <p className="text-sm pl-2 font-medium text-slate-600" >Check operation at Giga Factory 1</p>
            <p className="text-xs pl-2 font-medium text-slate-400">18.00-20.00</p>
            <p className="text-xs pl-2 font-medium text-slate-400">at Central Jakarta </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
