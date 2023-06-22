import Image from "next/image";
import React from "react";
import bellIcon from "../public/Vector.svg"

const dashboard = () => {
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
          <img src="#" alt="User" className="w-10 h-10" />
        </div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {list.map((item) => (
          <div
            key={item}
            className="bg-blue-400 h-24 w-full rounded-xl  "
          ></div>
        ))}
      </div>

      <div className="h-48 bg-orange-400 rounded-xl w-full "></div>

      <div className="flex items-center justify-center gap-8 w-full flex-col md:flex-row">
        <div className="bg-white w-full h-40 rounded-xl "></div>
        <div className="bg-white w-full h-40 rounded-xl "></div>
      </div>
    </div>
  );
};

export default dashboard;
