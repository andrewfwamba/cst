import React from "react";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  Title,
  PointElement,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(
  CategoryScale,
  LineElement,
  LinearScale,
  Title,
  PointElement,
  BarElement
);

function Bargraph() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Test data",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "ring ring-1 ring-amber-600",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  return (
    <Bar
      data={data}
      width={700}
      height={400}
      option={{
        maintainAspectRatio: true,
      }}
    />
  );
}

export default Bargraph;
