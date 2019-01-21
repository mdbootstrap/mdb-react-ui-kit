import React from "react";
import { Line, Bar, Radar, Pie, Doughnut, Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DocsLink from "./../components/docsLink";

// LineChart
const dataLine = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// RadarChart

const dataRadar = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "#1",
      backgroundColor: "rgba(245, 74, 85, 0.5)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "#2",
      backgroundColor: "rgba(90, 173, 246, 0.5)",
      data: [12, 42, 121, 56, 24, 12, 2]
    },
    {
      label: "#3",
      backgroundColor: "rgba(245, 192, 50, 0.5)",
      data: [2, 123, 154, 76, 54, 23, 5]
    }
  ]
};

// barChart
const dataBar = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "#1",
      data: [12, 39, 3, 50, 2, 32, 84],
      backgroundColor: "rgba(245, 74, 85, 0.5)",
      borderWidth: 1
    },
    {
      label: "#2",
      data: [56, 24, 5, 16, 45, 24, 8],
      backgroundColor: "rgba(90, 173, 246, 0.5)",
      borderWidth: 1
    },
    {
      label: "#3",
      data: [12, 25, 54, 3, 15, 44, 3],
      backgroundColor: "rgba(245, 192, 50, 0.5)",
      borderWidth: 1
    }
  ]
};
const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        gridLines: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)"
        },
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

// Polar Chart
const dataPolar = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      label: "My dataset" // for legend
    }
  ],
  labels: ["Jan", "Feb", "Mar", "Apr", "May"]
};

// Pie Chart
const dataPie = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [300, 50, 100, 40, 120, 24, 52],
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1",
        "#4D5360",
        "#ac64ad"
      ],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#da92db"
      ]
    }
  ]
};

// Doughnut Chart
const dataDoughnut = {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774"
      ]
    }
  ]
};

const ChartsPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Charts"
        href="https://mdbootstrap.com/docs/react/advanced/charts/"
      />
      <div>
        <h3 className="mt-5">Line chart</h3>
        <Line data={dataLine} options={{ responsive: true }} />
      </div>
      <div>
        <h3 className="mt-5">Radar chart</h3>
        <Radar data={dataRadar} options={{ responsive: true }} />
      </div>
      <div>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={dataBar} options={barChartOptions} />
      </div>
      <div>
        <h3 className="mt-5">Polar chart</h3>
        <Polar data={dataPolar} options={{ responsive: true }} />
      </div>
      <div>
        <h3 className="mt-5">Pie Chart</h3>
        <Pie data={dataPie} options={{ responsive: true }} />
      </div>
      <div>
        <h3 className="mt-5">Doughnut Chart</h3>
        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
      </div>
    </MDBContainer>
  );
}

export default ChartsPage;
