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
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Test data",
        backgroundColor: "rgba(180, 83, 9, 0.2)",
        borderColor: "rgba(180, 83, 9, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(180, 83, 9,0.4)",
        hoverBorderColor: "rgba(180, 83, 9, 1)",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 200, 150, 105, 98],
      },
    ],
  };
  return (
    <Bar
      data={data}
      width={400}
      height={200}
      option={{
        maintainAspectRatio: false,
      }}
    />
  );
}

export default Bargraph;
