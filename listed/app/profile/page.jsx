"use client";

import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar";
import { SetupState } from "@/context/context";
import Dashboard from "../../components/dashboard";
import Transactions from "../../components/transactions";
import Schedules from "../../components/schedules";
import Users from "../../components/users";
import Settings from "../../components/settings";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Context from "../../context/context";

const page = () => {
  const { activeFilter, setActiveFilter, sidebarOptions } = SetupState();
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Context>
        <div className=" flex items-center justify-between h-full w-full p-6 relative gap-8 bg-gray-200 ">
          {/* <div className=" h-full relative border-4 border-red-500  "> */}
          <Sidebar />
          {/* </div> */}
          <div className="  h-full w-full pl-14 lg:pl-56">
            {activeFilter === "Dashboard" && <Dashboard session={session} />}
            {activeFilter === "Transactions" && <Transactions />}
            {activeFilter === "Schedules" && <Schedules />}
            {activeFilter === "Users" && <Users />}
            {activeFilter === "Settings" && <Settings />}
          </div>
        </div>
      </Context>
    </>
  );
};

export default page;
