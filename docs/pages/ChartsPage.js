import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Container, Row, Col, Fa } from 'mdbreact';

// Line chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#848484',
      borderColor: '#848484',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#848484',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#848484',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class ChartsPage extends React.Component {
  componentDidMount() {
    // Radar chart
    const ctxR = document.getElementById("radarChart").getContext('2d');
    new Chart(ctxR, {
      type: 'radar',
      data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      options: {
          responsive: true
      }   
    });
    // Bar chart
    var ctxB = document.getElementById("barChart").getContext('2d');
    new Chart(ctxB, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      optionss: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
    // Polar chart
    var ctxPA = document.getElementById("polarChart").getContext('2d');
    new Chart(ctxPA, {
      type: 'polarArea',
      data: {
          labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
              {
                  data: [300, 50, 100, 40, 120],
                  backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
              }
          ]
      },
      options: {
          responsive: true
      }    
    });
    // Pie chart
    var ctxP = document.getElementById("pieChart").getContext('2d');
    new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });
    //doughnut
    var ctxD = document.getElementById("doughnutChart").getContext('2d');
    new Chart(ctxD, {
        type: 'doughnut',
        data: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });
  }
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <Container>
          <h3>Line chart</h3>
          <Line data={data} />
          <h3 className="mt-5">Radar chart</h3>
          <canvas id="radarChart"></canvas>
          <h3 className="mt-5">Bar chart</h3>
          <canvas id="barChart"></canvas>
          <h3 className="mt-5">Polar Area Chart</h3>
          <canvas id="polarChart"></canvas>
          <h3 className="mt-5">Pie Chart</h3>
          <canvas id="pieChart"></canvas>
          <h3 className="mt-5">Doughnut Chart</h3>
          <canvas id="doughnutChart"></canvas>
        </Container>
      </div>
    );
  }
 
};

export default ChartsPage;
