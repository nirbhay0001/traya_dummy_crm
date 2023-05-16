import React from 'react';
import ReactEChartsCore from 'echarts-for-react';
import * as echarts from 'echarts'; // Import the echarts library
// import Flex from 'components/common/Flex';
import Card from 'react-bootstrap/Card';
import '../../../../src/main.css';

function TicketsToday() {
  const getColor = color => {
    switch (color) {
      case 'primary':
        return '#007bff';
      case 'danger':
        return '#dc3545';
      case 'info':
        return '#17a2b8';
      case 'success':
        return '#28a745';
      case 'warning':
        return '#ffc107';
      case 'gray-100':
        return '#f8f9fa';
      case 'gray-300':
        return '#e9ecef';
      case 'gray-600':
        return '#6c757d';
      case 'dark':
        return '#343a40';
      default:
        return 'black';
    }
    // Implement your getColor function here
    // It should return the corresponding color based on the input
  };

  const getOption = () => ({
    series: [
      {
        type: 'pie',
        radius: ['80%', '90%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 0,
            name: 'Open',
            itemStyle: {
              color: getColor('primary')
            }
          },
          {
            value: 0,
            name: 'Pending',
            itemStyle: {
              color: getColor('danger')
            }
          },
          {
            value: 0,
            name: 'Resolved',
            itemStyle: {
              color: getColor('info')
            }
          },
          {
            value: 0,
            name: 'Closed',
            itemStyle: {
              color: getColor('success')
            }
          }
        ]
      }
    ],
    tooltip: {
      // trigger: 'item',
      // padding: [7, 10],
      // backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      textStyle: { color: getColor('dark') },
      // borderWidth: 1,
      // transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    }
  });

  return (
    <div>
      {/* <div className="font-weight-bold">Today</div> */}
      <Card style={{ width: '23rem', height: '10rem' }}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <div className="font-weight-bold text-black">Today</div>
              <ul class="list-unstyled list-style mt-1">
                <li>
                  <span class="color-bullet bg-primary"></span>
                  <span className="small">Open</span>
                </li>
                <li>
                  <span class="color-bullet bg-danger"></span>
                  <span className="small">Pending</span>
                </li>
                <li>
                  <span class="color-bullet bg-info"></span>
                  <span className="small">Resolved</span>
                </li>
                <li>
                  <span class="color-bullet bg-success"></span>
                  <span className="small">Closed</span>
                </li>
              </ul>
            </div>
            <ReactEChartsCore
              echarts={echarts}
              option={getOption()}
              style={{ height: '8rem', width: '10rem' }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TicketsToday;
