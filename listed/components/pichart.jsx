"use client"

import { useEffect } from "react"
import { Chart } from "chart.js";
import { UserData } from "@/utils/data";

function linechart() {
  useEffect(() => {
    var ctx = document.getElementById('myPiChart')
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
        datasets: [{
            data: [70, 10, 6],
            borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
            ],
            backgroundColor: [
                "rgb(75, 192, 192 )",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
            ],
            borderWidth: 2,
        }]
      },
    });
  }, [])



  return (
    <>
      <div style={{height: 'fit-content', width: '90%', overflow: "auto"}} className="flex items-center justify-center" >
        <div className="w-full h-full flex items-center justify-center" >
        <canvas id="myPiChart" ></canvas>
        </div>
      </div>
    </>
  )
}

export default linechart;