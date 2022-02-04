import React from "react";

import ReactApexChart from 'react-apexcharts';
import { IoPulse } from "react-icons/io5";
export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [props.magnitude],
        options: {
          chart: {
            height: 450,
            
            type: 'radialBar',
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
               hollow: {
                margin: 0,
                size: '80%',
                background: '#22234B',
                image: <IoPulse/>,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#22234B',
                strokeWidth: '87%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#fff',
                  fontSize: '17px'
                },
                value: {
                  formatter: function(val) {
                    return parseInt(val);
                  },
                  color: '#fff',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#0175FF'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Ampere'],
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="card">
<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
</div>
</div>


      );
    }
  }



