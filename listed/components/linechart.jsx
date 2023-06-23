"use client"

import { useEffect } from "react"
import { Chart } from "chart.js";
import { UserData } from "@/utils/data";

function linechart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Week1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
          data: UserData.map((item) => item.user),
          label: "User",
          borderColor: "#9BDD7C",
          backgroundColor: "#9BDD7C",
          fill: false,
        }, {
          data: UserData.map((item) => item.guest),
          label: "Guest",
          borderColor: "#E9A0A0",
          backgroundColor: "#E9A0A0",
          fill: false,
        },
        ]
      },
    });
  }, [])



  return (
    <>
      <div style={{height: 'fit-content', width: '90%', overflowX: "auto"}} className="flex items-center justify-center" >
        <div className="w-full h-full flex items-center justify-center" >
        <canvas id="myChart" ></canvas>
        </div>
      </div>
    </>
  )
}

export default linechart;