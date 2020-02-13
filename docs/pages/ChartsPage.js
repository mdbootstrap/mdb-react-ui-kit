import React from 'react';
import {
  Bar,
  Bubble,
  Doughnut,
  HorizontalBar,
  Line,
  Pie,
  Polar,
  Radar,
  Scatter,
  Chart
} from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

// LineChart
const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// RadarChart

const dataRadar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: '#1',
      backgroundColor: 'rgba(245, 74, 85, 0.5)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: '#2',
      backgroundColor: 'rgba(90, 173, 246, 0.5)',
      data: [12, 42, 121, 56, 24, 12, 2]
    },
    {
      label: '#3',
      backgroundColor: 'rgba(245, 192, 50, 0.5)',
      data: [2, 123, 154, 76, 54, 23, 5]
    }
  ]
};

// barChart
const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// Horizontal Chart
const dataHorizontal = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Grey'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [22, 33, 55, 12, 86, 23, 14],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  ]
};

// Polar Chart
const dataPolar = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      label: 'My dataset' // for legend
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
};

// Pie Chart
const dataPie = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120, 24, 52],
      backgroundColor: [
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
        '#ac64ad'
      ],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774',
        '#da92db'
      ]
    }
  ]
};

// Doughnut Chart
const dataDoughnut = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774'
      ]
    }
  ]
};

// Bubble Charts
const dataBubble = {
  labels: 'Bubble',
  datasets: [
    {
      label: 'John',
      data: [
        {
          x: 3,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#ff6384',
      hoverBackgroundColor: '#ff6384'
    },
    {
      label: 'Peter',
      data: [
        {
          x: 3.2,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#44e4ee',
      hoverBackgroundColor: '#44e4ee'
    },
    {
      label: 'Donald',
      data: [
        {
          x: 3.4,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#62088A',
      hoverBackgroundColor: '#62088A'
    }
  ]
};

// Scatter Charts
const dataScatter = {
  labels: ['Scatter'],
  datasets: [
    {
      borderColor: 'rgba(99,0,125, .2)',
      backgroundColor: 'rgba(99,0,125, .5)',
      label: 'V(node2)',
      data: [
        {
          x: 1,
          y: -1.711e-2
        },
        {
          x: 1.26,
          y: -2.708e-2
        },
        {
          x: 1.58,
          y: -4.285e-2
        },
        {
          x: 2.0,
          y: -6.772e-2
        },
        {
          x: 2.51,
          y: -1.068e-1
        },
        {
          x: 3.16,
          y: -1.681e-1
        },
        {
          x: 3.98,
          y: -2.635e-1
        },
        {
          x: 5.01,
          y: -4.106e-1
        },
        {
          x: 6.31,
          y: -6.339e-1
        },
        {
          x: 7.94,
          y: -9.659e-1
        },
        {
          x: 10.0,
          y: -1.445
        },
        {
          x: 12.6,
          y: -2.11
        },
        {
          x: 15.8,
          y: -2.992
        },
        {
          x: 20.0,
          y: -4.102
        },
        {
          x: 25.1,
          y: -5.429
        },
        {
          x: 31.6,
          y: -6.944
        },
        {
          x: 39.8,
          y: -8.607
        },
        {
          x: 50.1,
          y: -1.038e1
        },
        {
          x: 63.1,
          y: -1.223e1
        },
        {
          x: 79.4,
          y: -1.413e1
        },
        {
          x: 100.0,
          y: -1.607e1
        },
        {
          x: 126,
          y: -1.803e1
        },
        {
          x: 158,
          y: -2e1
        },
        {
          x: 200,
          y: -2.199e1
        },
        {
          x: 251,
          y: -2.398e1
        },
        {
          x: 316,
          y: -2.597e1
        },
        {
          x: 398,
          y: -2.797e1
        },
        {
          x: 501,
          y: -2.996e1
        },
        {
          x: 631,
          y: -3.196e1
        },
        {
          x: 794,
          y: -3.396e1
        },
        {
          x: 1000,
          y: -3.596e1
        }
      ]
    }
  ]
};

const scatterOptions = {
  title: {
    display: true,
    text: 'Scatter Chart - Logarithmic X-Axis'
  },
  scales: {
    xAxes: [
      {
        type: 'logarithmic',
        position: 'bottom',
        ticks: {
          userCallback: function(tick) {
            var remain =
              tick / Math.pow(10, Math.floor(Chart.helpers.log10(tick)));
            if (remain === 1 || remain === 2 || remain === 5) {
              return tick.toString() + 'Hz';
            }
            return '';
          }
        },
        scaleLabel: {
          labelString: 'Frequency',
          display: true
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        ticks: {
          userCallback: function(tick) {
            return tick.toString() + 'dB';
          }
        },
        scaleLabel: {
          labelString: 'Voltage',
          display: true
        }
      }
    ]
  }
};

const ChartsPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title='Charts'
        href='https://mdbootstrap.com/docs/react/advanced/charts/'
      />

      <SectionContainer header='Line chart'>
        <Line data={dataLine} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Radar chart'>
        <Radar data={dataRadar} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Bar chart'>
        <Bar data={dataBar} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Horizontal chart'>
        <HorizontalBar data={dataHorizontal} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Polar chart'>
        <Polar data={dataPolar} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Pie chart'>
        <Pie data={dataPie} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Doughnut chart'>
        <Doughnut data={dataDoughnut} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Bubble chart'>
        <Bubble data={dataBubble} options={{ responsive: true }} />
      </SectionContainer>

      <SectionContainer header='Scatter chart'>
        <Scatter data={dataScatter} options={scatterOptions} />
      </SectionContainer>
    </MDBContainer>
  );
};

export default ChartsPage;
