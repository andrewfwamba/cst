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
import { Line } from "react-chartjs-2";
Chart.register(
  CategoryScale,
  LineElement,
  LinearScale,
  Title,
  PointElement,
  BarElement
);

function Bargraph() {
  // const data = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "Aug",
  //     "Sept",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   datasets: [
  //     {
  //       label: "Test data",
  //       backgroundColor: "rgba(180, 83, 9, 0.2)",
  //       borderColor: "rgba(180, 83, 9, 1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(180, 83, 9,0.4)",
  //       hoverBorderColor: "rgba(180, 83, 9, 1)",
  //       data: [65, 59, 80, 81, 56, 55, 40, 70, 200, 150, 105, 98],
  //     },
  //   ],
  // };
  return (
    // <Bar
    //   data={data}
    //   width={400}
    //   height={200}
    //   option={{
    //     maintainAspectRatio: false,
    //   }}
    // />
    <div className="h-full w-full p-4">
      <Line
        data={{
          // x-axis label values
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "# Clients",
              // y-axis data plotting values
              data: [200, 300, 500, 1020, 1500, 2350, 3150],
              fill: false,
              borderWidth: 2,
              backgroundColor: "gray",
              borderColor: "lightgreen",
              responsive: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default Bargraph;
